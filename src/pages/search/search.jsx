import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchAction } from "../../redux/slices/searchSlice.jsx";
import SearchCardMUI from "../../components/searchCard/searchCardMUI.jsx";

const Search = ({ searchWord }) => {
  const { jobs, isLoading, error } = useSelector((state) => state.search);
  const [searchWords, setSearchWords] = useState(searchWord || "");

  let baseSearchUrl = "https://jobboardbackend-u9zm.onrender.com/api/v1/jobs";

  const dispatch = useDispatch();

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
    dispatch(SearchAction(`${baseSearchUrl}?keyword=${searchWords}`));
  };

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        {" "}
        <input type="text" value={searchWords} onChange={handleChange} />{" "}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </button>{" "}
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading jobs.</p>}
      {jobs.map((job) => (
        <SearchCardMUI key={job.id} job={job}></SearchCardMUI>
      ))}
    </div>
  );
};

export default Search;
