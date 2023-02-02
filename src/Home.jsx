import React from "react";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Trending from "./components/Trending";

const Home = () => {
  return (
    <React.Fragment>
      <section >
        <Hero />

        
        <Trending />
        <Popular />
      </section>
    </React.Fragment>
  );
};

export default Home;
