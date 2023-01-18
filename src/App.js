import logo from "./logo.svg";
import { BrowserRouter, Route, Switch, Routes, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Following from "./components/Following";
import Logout from "./components/Logout";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Title from "./components/Title";
import Banner from "./components/banner/Banner";

import LatestTrailer from "./components/LatestTrailer";
import { AuthProvider } from "./context/auth-context";
import SearchBox from "./search/SearchBox";
import Main from "./Main";

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main/>}
  ])
  return (
    <RouterProvider router={router}/>
    


    // <AuthProvider>
    //   <div className="bg-[#181818] ">
    //     <div className="flex relative">
    //       <div className="w-[14%] fixed sidebar max-w-[300px] min-w-[200px] h-full z-50">
    //         <Routes>
    //         <Route exact path="/movie" element={<Title></Title>}></Route>
    //           <Title />
    //           <Feed />
    //           <Following />
    //           <Logout />
    //         </Routes>
    //       </div>
    //       <div className="w-[85%] ml-[15%] relative">
    //         <Routes>
    //           <Navbar />
    //           <Banner />
    //           <Hero />
    //           <Trending />
    //           <Popular />
    //           <LatestTrailer />
    //         </Routes>
    //       </div>
    //     </div>
    //   </div>
    // </AuthProvider>







    // <BrowserRouter className="bg-gray-700">

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
