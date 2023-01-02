import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import one from "../assets/images/one.png";
import { Content } from "../Content";


const Hero = () => {
  const {heroPhotos} = Content;
  return (
    <section className="relative bg-witcher bg-center bg-cover ml-4 h-80  drop-shadow-md rounded-2xl">
      <div className="text-white">
        <h2 className="text-xl p-12">
          {heroPhotos.name}
          <span className="font-bold ">
            <br />
            WITCHER
          </span>
        </h2>
      </div>
      <img src={heroPhotos.pic} alt="logo" className=" absolute ml-80 bottom-6 right-12 w-16 h-10"/>
    </section>
  );
};

export default Hero;
