import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchAction } from "../../redux/slices/searchSlice.jsx";
import SearchCardMUI from "../../components/searchCard/searchCardMUI.jsx";
import { useLocation } from "react-router-dom";
import FilterCard from "../../components/searchCard/filterCard.jsx";

const Search = () => {
  const { jobs, isLoading, error } = useSelector((state) => state.search);
  
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchWord = searchParams.get("keyword");

  

  const [searchWords, setSearchWords] = useState(searchWord || "");
  const [filters, setFilters] = useState({ category: "", employmentType: "" });


  const baseSearchUrl = "https://jobboardbackend-u9zm.onrender.com/api/v1/jobs";

  const handleChange = (e) => {
    setSearchWords(e.target.value);
  };

  useEffect(() => {
    if (searchWord) {
      dispatch(SearchAction(`${baseSearchUrl}?keyword=${searchWord}`));
    }
  }, [dispatch, baseSearchUrl, searchWord]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let filterUrl = `${baseSearchUrl}?keyword=${searchWords}`;
    if (filters.category) {
      filterUrl += `&category=${filters.category}`;
    }
    if (filters.employmentType) {
      filterUrl += `&employmentType=${filters.employmentType}`;
    }
    dispatch(SearchAction(filterUrl));  };

    const handleFilterChange = (newFilters) => {
      setFilters(newFilters);
    };

  return (
    <div style={{ display: "flex" }}>
      <FilterCard onFilter={handleFilterChange} />
      <div>
        <h1>Search</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchWords} onChange={handleChange} />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Searching..." : "Search"}
          </button>
        </form>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading jobs.</p>}
        {jobs.map((job) => (
          <SearchCardMUI key={job.id} job={job}></SearchCardMUI>
        ))}
      </div>
    </div>
  );
};

export default Search;
