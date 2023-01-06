import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleCard from "./SingleCard";
import TrendingCard from "../UI/TrendingCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { img_url } from "../api/Index";

const Popular = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchPopular = `
  https://api.themoviedb.org/3/movie/550/videos?v=6JnN1DmbqoU&api_key=a02cb89a765a86c8bf96b049622889fd&language=en-US`;

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
    slidesToShow: 6,
    slidesToScroll: 2,
    lazyLoad: true,
    arrows: false,
    // autoplay: true,
    //   autoplaySpeed: 2000,
  };

  return (
    <TrendingCard>
      <div>
        <h3 className="pl-6 pt-4 font-bold text-white text-xl">
          What's Popular
        </h3>

        <Slider {...settings} className="flex flex-wrap pl-6 ">
          {content?.results?.map((item, index) => (
              <SingleCard
                key={index}
                img={`${img_url}${item.poster_path}`}
                title={item.title}
                poster={item.release_date}
              ></SingleCard>
            ))}
        </Slider>
      </div>
    </TrendingCard>
  );
};

export default Popular;
