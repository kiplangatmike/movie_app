import { useEffect, useState } from "react";
import { getTTFB } from "web-vitals";
import LatestCard from "../UI/LatestCard";
import SingleCardTrailer from "./SingleCardTrailer";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestTrailer = () => {
  const [content, setContent] = useState([]);

  const fetchData = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    setContent(data);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchData();
  }, []);

  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    lazyLoad: true,
   
  };

  return (
    <LatestCard>
      <h3 className="pl-6 pt-4 font-bold text-dark_blue text-xl">
        Latest Trailers
      </h3>
      <Slider {...settings} className="flex flex-wrap pl-6 ">
        {content && content.map((c) => (
          <SingleCardTrailer key={c.id} title={c.title} poster={c.poster}>
            <h1>hello</h1>
          </SingleCardTrailer>
        ))}
      </Slider>
    </LatestCard>
  );
};

export default LatestTrailer;
