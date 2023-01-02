import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import one from "../assets/images/one.png";
import { Content } from "../Content";
import Slider from "react-slick";
import SingleCardHero from "./SingleCardHero";

const Hero = () => {
  const { heroPhotos } = Content;

  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    // autoplay: true,
    //   autoplaySpeed: 2000,
  };

  return (
    <section className="relative bg-witcher bg-center bg-cover ml-4 h-80  drop-shadow-md rounded-2xl">
      <div className="absolute bottom-20 right-8 h-12 w-40">
        <Slider {...settings} >
          {Content.heroPhotos.map((content, i) => (
            <SingleCardHero
              key={i}
              poster={content.pic}
              title={content.name}
            ></SingleCardHero>
          ))}
        </Slider>
      </div>

      {/* <h2 className="text-xl p-12">
        {heroPhotos.name}
        <span className="font-bold ">
          <br />
          WITCHER
        </span>
      </h2>

      <img
        src={heroPhotos.pic}
        alt="logo"
        className=" absolute ml-80 bottom-6 right-12 w-16 h-10"
      /> */}
    </section>
  );
};

export default Hero;
