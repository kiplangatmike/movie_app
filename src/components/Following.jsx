import React from "react";
import FollowingCard from "../UI/FollowingCard";

const Following = () => {
  return (
    <FollowingCard>
      <div className="text-white p-4">
        <div className="pb-3">
          <h5>following</h5>
        </div>
        <div className="">
          <h4 className="pb-2">Mike</h4>
          <h4 className="">Kim</h4>
        </div>
      </div>
      
    </FollowingCard>
  );
};

export default Following;
