import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BiMessageAltDetail } from "react-icons/bi";
import {
  IoIosArrowBack,
  IoIosNotificationsOutline,
  IoIosArrowForward,
} from "react-icons/io";
import Card from "../UI/Card";
import axios from "axios";

const Navbar = () => {
  const [movie, setMovie] = useState([]);
  const [searchKey, setSearchMovies] = useState();

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`https://api.themoviedb.org/3/${type}/movie`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        query: searchKey,
      },
    });

    setMovie(results);
    console.log(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };
  return (
    <Card>
      <nav className="flex flex-row gap-12 items-center fixed-top  px-2 top-0 left-0">
        <div className="flex flex-row text-gray-100 gap-2">
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>
        <div className="">
          <form onSubmit={searchMovies}>
            <input
              type="text"
              value={searchKey}
              onChange={(e) => setSearchMovies(e.target.results)}
              placeholder="Search everything"
              className="rounded p-0.5 text-white pl-12 bg-light_black items-center outline-none"
            />
            <button type="submit" className="bg-slate-100 text-gray px-1 rounded ml-2">Search</button>
          </form>
        </div>
        <div className="flex flex-row text-gray-100 gap-4 absolute right-0 z-10 w-40 origin-top-right rounded-md  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-2xl">
          <a className="block hover:text-black">
            <IoIosNotificationsOutline />
          </a>
          <a className="block hover:text-black">
            <BiMessageAltDetail />
          </a>
          <a className="block hover:text-black ">
            <CgProfile />
          </a>
        </div>
      </nav>
    </Card>
  );
};

export default Navbar;
