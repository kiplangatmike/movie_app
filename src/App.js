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
    <BrowserRouter className="bg-gray-700">
      <Navbar />
      <Routes>
        
        <Route path="/" component={Trending} exact/>
        <Route path="/feed" component={Feed} />
        <Route path="/hero" component={Hero}/>
        
        <Route path="/following" component={Following}/>
        <Route path="/logout" component={Logout}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
