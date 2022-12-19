import React from "react";
import { GiEternalLove } from "react-icons/gi";
import { BsCalendar3 } from "react-icons/bs";
import { FaCompass } from "react-icons/fa";
import FeedCard from "../UI/FeedCard";

const Feed = () => {
  return (
    <FeedCard>
      <section className=" mb-2">
        <div className=" items-center py-2">
          <div className="font-bold text-red-800 pb-3 pt-1 text-center">
            <h5>News Feed</h5>
          </div>
          <div className="pl-4 text-red-500 font-bold flex flex-row gap-2 items-center pb-3">
            <i>
              <FaCompass />
            </i>
            <h4>Browse</h4>
          </div>
          <div className="pl-4 text-white font-bold flex flex-row gap-2 items-center pb-3">
            <i>
              <GiEternalLove />
            </i>
            <h4>Watch list</h4>
          </div>
          <div className="pl-4 text-white font-bold flex flex-row gap-2 items-center pb-3">
            <i>
              <BsCalendar3 />
            </i>
            <h4>Movies</h4>
          </div>
          <div className="pl-4 text-white font-bold flex flex-row gap-2 items-center pb-3">
            <i>
              <BsCalendar3 />
            </i>
            <h4>Series</h4>
          </div>
        </div>
      </section>
    </FeedCard>
  );
};

export default Feed;
