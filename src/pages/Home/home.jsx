import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
 
  const Token = useSelector((state) => state.Token.token);
  console.log('token',Token)
 
    const [searchWords, setSearchWords] = useState("");
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setSearchWords(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/search?keyword=${searchWords}`);
      setSearchWords("")
    };

    return (
        <div>
        <h1>Home</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchWords} onChange={handleChange} />
          <button type="submit">
            Search
          </button>
        </form>
      </div>
    );
}

export default Home;
