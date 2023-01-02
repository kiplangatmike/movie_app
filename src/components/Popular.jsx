import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleCard from "./SingleCard";
import TrendingCard from "../UI/TrendingCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Popular = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

    const fetchTrending = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
    //   console.log(JSON.stringify(data));
      setContent(data);
    //   console.log(data);
    };

    useEffect(() => {
      window.scroll(0, 0);
      fetchTrending();
    }, [page]);

  // axios
  //   .get("http://www.omdbapi.com/?i=tt3896198&apikey=5b731350")
  //   .then(function (response) {
  //     console.log(response.data);
  //     setContent(response.data);
  //   });

  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    lazyLoad: true,
    // autoplay: true,
//   autoplaySpeed: 2000,
   
  };

  return (
    <TrendingCard>
      <div>
        <h3 className="pl-6 pt-4 font-bold text-white text-xl">What's Popular</h3>

        <Slider {...settings} className="flex flex-wrap pl-6 ">
          {content &&
            content.map((c) => (
              <SingleCard
                key={c.id}
                title={c.name}
                poster={c.username}
              ></SingleCard>
            ))}
        </Slider>
      </div>
    </TrendingCard>
  );
};

export default Popular;
