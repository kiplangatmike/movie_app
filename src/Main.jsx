import Title from "./components/Title";
import SearchBox from "./search/SearchBox";
import Feed from "./components/Feed";
import Following from "./components/Following";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import LatestTrailer from "./components/LatestTrailer";
import Sidebar from "./components/Sidebar";
import Banner from "./components/banner/Banner";
import TrendingPage from "./components/pages/TrendingPage";
import NavPath from "./NavPath";
import React from "react";

const Main = () => {
  return (
    <React.Fragment>
      <div className="bg-[#181818] ">
        {/* <section className="h-[5%] ">
          <Navbar />
        </section> */}
        <section>
          <div className="flex flex-row w-[100%] w-full">
            <div className="w-[20%] sidebar fixed md:w-[15%] sm:w-[15%]">
              <div className="  h-screen">
                <Sidebar />
              </div>

              {/* <Feed />
          <Following />
          <Logout /> */}
            </div>
            <div className="w-[80%] bg-grey ml-[20%] md:w-[85%] md:ml-[15%] sm:w-[85%]">
              <div className="">
                <Navbar />
              </div>

              <NavPath />
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Main;
