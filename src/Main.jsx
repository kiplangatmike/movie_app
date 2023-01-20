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
import TrendingPage from "./components/pages/TrendingPage";

const Main = () => {
    return (
        <div className="bg-[#181818] ">
        <div className="flex relative">
          <div className="w-[14%] fixed sidebar max-w-[300px] min-w-[130px] h-full z-50">
          {/* <Title /> */}
          <Sidebar />
          <Feed />
          <Following />
          <Logout />
          </div>
          <div className="w-[85%] ml-[15%] relative min-w-[200px]">
        
              <Navbar />
              {/* <Banner /> */}
              <Hero />
              <Trending />
              <Popular />
              {/* <TrendingPage /> */}
              <LatestTrailer />
          </div>
        </div>
      </div>
    )
};

export default Main;