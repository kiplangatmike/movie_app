import React from "react";
import { Link } from "react-router-dom";
import { GiEternalLove } from "react-icons/gi";
import { BsCalendar3 } from "react-icons/bs";
import { FaCompass } from "react-icons/fa";
import FeedCard from "../UI/FeedCard";

const Feed = () => {
  return (
    <FeedCard>
      <section className=" mb-2">
        <div className=" items-center py-">
          <div className="font-bold text-red-600 pb-3 pt-1 text-center">
            <h5>News Feed</h5>
          </div>
          <div className="cursor-pointer hover:bg-red-600 rounded-xl pl-4 text-white font-bold flex flex-row gap-2 items-center py-2">
            <i>
              <FaCompass />
            </i>
            <Link to='searchbox'><h4>Browse</h4></Link>
          </div>
          <Link to='trending'><div className="cursor-pointer hover:bg-red-600 rounded-xl pl-4 text-white font-bold flex flex-row gap-2 items-center py-2">
            <i>
              <GiEternalLove />
            </i>
            <h4>Trending</h4>
          </div></Link>
          <Link to='popular'><div className="cursor-pointer hover:bg-red-600 rounded-xl pl-4 text-white font-bold flex flex-row gap-2 items-center py-2">
            <i>
              <BsCalendar3 />
            </i>
            <h4>Popular</h4>
          </div></Link>
          <div className="cursor-pointer hover:bg-red-600 rounded-xl pl-4 text-white font-bold flex flex-row gap-2 items-center py-2">
            <i>
              <BsCalendar3 />
            </i>
            <h4>Trailers</h4>
          </div>
        </div>
      </section>
    </FeedCard>
  );
};

export default Feed;
