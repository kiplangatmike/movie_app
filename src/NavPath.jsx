import { Route, Routes } from "react-router-dom";
import React from "react";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Main from "./Main";
import Movies from "./components/pages/Movies";
import Series from "./components/pages/Series";
import SearchBox from "./search/SearchBox";
import Home from "./Home";
import TrendingPage from "./components/pages/TrendingPage";
import PopularPage from "./components/pages/PopularPage";

const NavPath = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="trendingpage" element={<TrendingPage />} />
          <Route path="popularpage" element={<PopularPage />} />
          {/* <Route path="discover" element={<SearchBox />} /> */}
          {/* <Route path="movies" element={<Movies />} /> */}
          <Route path="series" element={<Series />} />
        </Routes>
      </section>
    </React.Fragment>
  )
}
export default NavPath;