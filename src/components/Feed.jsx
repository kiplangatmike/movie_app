import React from "react";
import { GiEternalLove } from "react-icons/gi";
import { BsCalendar3 } from "react-icons/bs";
import { FaCompass } from "react-icons/fa";
import Card from "../UI/Card";

const Feed = () => {
  return (
    <Card>
      <section className="m-4">
        <div className="lg:px-8mx-auto gap-8">
          <div>
            <h5 className="text-white gap-8">News Feed</h5>
          </div>
          <div className="text-white flex flex-row gap-8">
            <i>
              <FaCompass />
            </i>
            <h4>Browse</h4>
          </div>
          <div className="text-white flex flex-row">
            <i>
              <GiEternalLove />
            </i>
            <h4>Watch list</h4>
          </div>
          <div className="text-white flex flex-row">
            <i>
              <BsCalendar3 />
            </i>
            <h4>Coming soon</h4>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default Feed;
