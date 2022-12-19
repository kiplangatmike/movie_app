import logo from "./logo.svg";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Following from "./components/Following";
import Logout from "./components/Logout";
import Hero from "./components/Hero";
import Trending from "./components/Trending";

function App() {
  return (
    // <BrowserRouter className="bg-gray-700">
    <div className="bg-dark_black">
      <Navbar />
      <div className="flex">
        <div className="w-[20%]">
          <Feed />
          
          <Following />
          <Logout />
        </div>
        <div className="w-[79%]">
          <Hero />
          <Trending />
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
