import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleCard from "./SingleCard";
import TrendingCard from "../UI/TrendingCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiWhiteBook } from "react-icons/gi";
import { img_url } from "../api/Index";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

const API_key = process.env.REACT_APP_API_KEY;

const Trending = (props) => {
  const [timeData, setTimeData] = useState("day");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = `https://api.themoviedb.org/3/trending/movie/${timeData}?api_key=14ccdb96456935bbb41591e99697d262`;

  useEffect(() => {
    fetch(fetchTrending)
      .then((response) => response.json())
      .then((json) => {
        setContent(json);
      });
    window.scroll(0, 0);
  }, [timeData]);

  console.log(content);

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <React.Fragment>
      <div className="bg-black  my- mx-4 rounded-2xl">
        <TrendingCard>
          <h3 className="pl-6 pt-4 font-bold text-white text-xl">
            Trending Today
          </h3>
        </TrendingCard>

        <Slider {...settings} className="flex flex-wrap pl-6 ">
          {content?.results?.map((item, index) => (
            <Link to={`/detailspage/${item.id} `} style={{ color: '#323232',textDecoration: 'none' }}>
            <SingleCard
              key={index}
              poster={`${img_url}${item.poster_path}`}
              title={item.title}
              release_date={item.release_date}
            ></SingleCard></Link>
          ))}
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default Trending;
