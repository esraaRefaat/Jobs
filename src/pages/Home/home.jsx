import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./home.module.css";
import homeImage from "/home.svg";
import search from "/search.svg";
import CustomText from "../../components/customText";
import Category from "../../components/Category";
import FeaturedJobs from "../../components/FeaturedJobsCard";
import Arrow from "/Arrow.svg";
import { usersAction } from "../../redux/slices/usersSlice";

const Home = () => {
  const categories = useSelector((state) => state.getUsers.users);
  const dispatch = useDispatch()
  const [searchWords, setSearchWords] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchWords(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?keyword=${searchWords}`);
    setSearchWords("");
  };
  useEffect(() => {
    dispatch(usersAction())
  }, [])
  let categoriesArr = [
    {
      cat: 'Design',
      num: 20
    },
    {
      cat: 'Sales',
      num: 15
    },
    {
      cat: 'Marketing',
      num: 25
    },
    {
      cat: 'Finance',
      num: 5
    },
    {
      cat: 'Technology',
      num: 35
    },
    {
      cat: 'Engineering',
      num: 10
    },
    {
      cat: 'Business',
      num: 30
    },
    {
      cat: 'Human Resource',
      num: 4
    },

  ]


  return (
    <>
      <div className={classes.container}>
        <div className={classes.imgBackground}>
          <form onSubmit={handleSubmit} className={classes.formstyle}>
            <div className={classes.formContainer}>
              <img src={search} style={{ marginRight: 16 }} />
              <input
                type="text"
                value={searchWords}
                onChange={handleChange}
                className={classes.formInput}
                placeholder="Job title or keyword"
              />
              <button type="submit" className={classes.formButton}>
                Search my job
              </button>
            </div>
          </form>
        </div>
        <div className={classes.TextContainer}>
          <div className={classes.row}>
            <CustomText
              text={"Explore by"}
              color="#25324B"
              fontFamily='Roboto-Medium'
              size={40}
            />
            <CustomText
              text={" category"}
              color="#26A4FF"
              fontFamily='Roboto-Medium'
              size={40}
            />
          </div>
          <button
            className={classes.buttonStyle}
            onClick={() => {
              navigate(`/search`);
            }}>
            <div className={classes.allJobs}>
              <CustomText
                text={'Show all jobs'}
                color="#4640DE"
                fontFamily='Roboto-Medium'
                size={16}
              />
              <img src={Arrow} />
            </div>
          </button>
        </div>
        <div className={classes.center}>
          <div className={classes.categoryList}>
            {categoriesArr?.map((item) => (
              <Category
                category={item.cat}
                number={item.num} />
            ))}
          </div>
        </div>
        <div className={classes.TextContainer}>
          <div className={classes.row}>
            <CustomText
              text={"Featured"}
              color="#25324B"
              fontFamily='Roboto-Medium'
              size={40}
            />
            <CustomText
              text={" jobs"}
              color="#26A4FF"
              fontFamily='Roboto-Medium'
              size={40}
            />
          </div>
          <button
            className={classes.buttonStyle}
            onClick={() => {
              navigate(`/search`);
            }}>
            <div className={classes.allJobs}>
              <CustomText
                text={'Show all jobs'}
                color="#4640DE"
                fontFamily='Roboto-Medium'
                size={16}
              />
              <img src={Arrow} />
            </div>
          </button>
        </div>
        <div className={classes.center}>
          <div className={classes.featuredList}>
            {categories?.map((item) => (
              <FeaturedJobs
                Id={item._id}
                category={item.category}
                type={item.employmentType}
                catTitle={item.title}
                catLocation={item.location}
                catCompany={item.company}
                catDetails={item.details}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

