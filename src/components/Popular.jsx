import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleCard from "./SingleCard";
import TrendingCard from "../UI/TrendingCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { img_url } from "../api/Index";

const Popular = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchPopular = `
  https://api.themoviedb.org/3/discover/movie?api_key=a02cb89a765a86c8bf96b049622889fd&language=en-US`;

  //   console.log(JSON.stringify(data));
  // setContent(data.genre);
  // console.log(c);

  useEffect(() => {
    fetch(fetchPopular)
      .then((response) => response.json())
      .then((json) => {
        setContent(json);
      });
    window.scroll(0, 0);
  }, []);
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
    // autoplay: true,
    //   autoplaySpeed: 2000,
  };

  return (
    // <TrendingCard>
    <div className="bg-black  my-5 mx-4 pb- rounded-2xl">
      <TrendingCard>
        <h3 className="pl-6 pt-4 font-bold text-white text-xl">
          What's Popular
        </h3>
      </TrendingCard>

      <Slider {...settings} className="flex flex-wrap pl-6 ">
        {content?.results?.map((item, index) => (
          <SingleCard
            key={index}
            poster={`${img_url}${item.poster_path}`}
            title={item.title}
            release_date={item.release_date}
          ></SingleCard>
        ))}
      </Slider>
    </div>
    // </TrendingCard>
  );
};

export default Popular;
