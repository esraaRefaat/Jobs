import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchAction } from "../../redux/slices/searchSlice.jsx";
import { Link, useLocation } from "react-router-dom";
import FilterCard from "../../components/searchCard/filterCard.jsx";
import SearchJobCard from "../../components/searchCard/searchJobCard.jsx";
import { Box, Button, CircularProgress, TextField } from "@mui/material";

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
    } else {
      dispatch(SearchAction(`${baseSearchUrl}`));
    }
  }, [dispatch, searchWord]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let filterUrl = `${baseSearchUrl}?keyword=${searchWords}`;
    if (filters.category) {
      filterUrl += `&category=${filters.category}`;
    }
    if (filters.employmentType) {
      filterUrl += `&employmentType=${filters.employmentType}`;
    }
    dispatch(SearchAction(filterUrl));
  };

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  return (
    <div style={{ display: "flex" }}>
    <FilterCard onFilter={handleFilterChange} />
    <div style={{ flex: 1, padding: "20px" }}>
      <h1>Search</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
      <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
            <TextField
              label="Search"
              variant="outlined"
              value={searchWords}
              onChange={handleChange}
              style={{ marginRight: "10px", flex: 1 }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
              style={{ height: "100%" }}
              
            >
              {isLoading ? <CircularProgress size={24} /> : "Search"}
            </Button>
          </Box>
      </form>

      {isLoading &&  <CircularProgress size={24}/>}
      {error && <p>Error loading jobs.</p>}
      {jobs.map((job) => (
        <Link key={job._id} to={`/jobinfo/${job._id}`} style={{ textDecoration: "none" }}>
          <SearchJobCard job={job} />
        </Link>
      ))}
    </div>
  </div>
  );
};

export default Search;

