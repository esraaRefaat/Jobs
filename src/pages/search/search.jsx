import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchAction } from "../../redux/slices/searchSlice.jsx";

const Search = () => {
    const { jobs, isLoading, error } = useSelector((state) => state.search);
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(SearchAction())
    },[dispatch])
    
    console.log(jobs)
    return (
        <div>
        <h1>Search</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading jobs.</p>}
        <ul>
          {jobs.map((job) => (
            <li key={job._id}>{job.title}</li>
          ))}
        </ul>
      </div>
    );
}

export default Search;
