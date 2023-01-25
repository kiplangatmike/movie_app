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
          <div className="flex flex-row grid grid-cols-12 w-full">
            <div className="col-span-3 sidebar h-full md:col-span-2 ">
              <div className="fixed h-full">
                <Sidebar />
              </div>

              {/* <Feed />
          <Following />
          <Logout /> */}
            </div>
            <div className="col-span-9 bg-grey md:col-span-10 content-right ">
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
