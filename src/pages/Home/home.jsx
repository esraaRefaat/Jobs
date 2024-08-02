import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import classes from './home.module.css'; 
import homeImage from '/home.svg'
import search from '/search.svg'
import CustomText from '../../components/customText';
import Category from '../../components/Category';
import FeaturedJobs from '../../components/FeaturedJobsCard';
import Arrow from '/Arrow.svg'




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
    const categories=[1,1,1,1,1,1,1,1]

    return (
      <>
        <div className={classes.container} >
        <div className={classes.imgBackground} >
         <form onSubmit={handleSubmit} className={classes.formstyle}>
         <div className={classes.formContainer}>
          <img src={search} style={{marginRight:16}}/>
          <input type="text" value={searchWords} onChange={handleChange} className={classes.formInput} placeholder='Job title or keyword'/>
          <button type="submit" className={classes.formButton}>
            Search my job
          </button>
          </div>
        </form> 
        </div>
     <div className={classes.TextContainer}>
        <div className={classes.row}>
        <CustomText
       text={'Explore by'}
       color="#25324B"
       fontFamily='Roboto-Medium'
       size={48}
     />
      <CustomText
       text={' category'}
       color="#26A4FF"
       fontFamily='Roboto-Medium'
       size={48}
     />
     </div>
     <div  className={classes.allJobs}>
     <CustomText
       text={'Show all jobs'}
       color="#4640DE"
       fontFamily='Roboto-Medium'
       size={16}
     />
     <img src={Arrow}/>
     </div>
     </div>
     <div className={classes.center}>
     <div className={classes.categoryList}>
     {categories.map((category, index) => (
         <Category/>
        ))}
        </div>
        </div>
        <div className={classes.TextContainer}>
        <div className={classes.row}>
        <CustomText
       text={'Featured'}
       color="#25324B"
       fontFamily='Roboto-Medium'
       size={48}
     />
      <CustomText
       text={' jobs'}
       color="#26A4FF"
       fontFamily='Roboto-Medium'
       size={48}
     />
     </div>
     <div  className={classes.allJobs}>
     <CustomText
       text={'Show all jobs'}
       color="#4640DE"
       fontFamily='Roboto-Medium'
       size={16}
     />
     <img src={Arrow}/>
     </div>
     </div>
     <div className={classes.center}>
     <div className={classes.featuredList}>
     {categories.map((category, index) => (
         <FeaturedJobs/>
        ))}
        </div>
        </div>
        </div>
      
     
     </>
    );
}

export default Home;
