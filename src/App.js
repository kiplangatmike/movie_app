import logo from "./logo.svg";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Following from "./components/Following";
import Logout from "./components/Logout";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Title from "./components/Title";

import LatestTrailer from "./components/LatestTrailer";

function App() {
  return (
    // <BrowserRouter className="bg-gray-700">
    <div className="bg-[#181818] ">
      <div className="flex relative">
        <div className="w-[14%] fixed sidebar max-w-[300px] min-w-[200px] h-full z-50">
          <Title />
          <Feed />
          <Following />
          <Logout />
        </div>
        <div className="w-[85%] ml-[15%] relative">
          <Navbar />
          <Hero />
          <Trending />
          <Popular />
          <LatestTrailer />
        </div>
      </div>
    </div>

    //     {<Routes>

    //       <Route path="/" component={Trending} exact/>
    //       <Route path="/feed" component={Feed} />
    //       <Route path="/hero" component={Hero}/>

    //       <Route path="/following" component={Following}/>
    //       <Route path="/logout" component={Logout}/>
    //     </Routes>
    //   </BrowserRouter> }
  );
}

export default App;
