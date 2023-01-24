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
import Sidebar from './components/Sidebar';
import Banner from "./components/banner/Banner";
import TrendingPage from "./components/pages/TrendingPage";
import NavPath from "./NavPath";

const Main = () => {
    return (
        <div className="bg-[#181818] ">
        <div className="flex grid grid-col-12 relative">
        <Navbar />
          <div className="grid-col-3 fixed sidebar h-full z-50">
          {/* <Title /> */}
          
          <Sidebar />
          {/* <Feed />
          <Following />
          <Logout /> */}
          </div>
          <div className="grid-col-9 ml-[15%] relative ">
        
              <NavPath/>
          </div>
        </div>
      </div>
    )
};

export default Main;