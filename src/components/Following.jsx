import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { json } from "react-router-dom";
import FollowingCard from "../UI/FollowingCard";

const Following = () => {
  const [user, setUser] = useState([]);

  const fetchUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const results = JSON.stringify(data);
    setUser(data);
    // console.log(data)
    // console.log(results)
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  

  return (
    <FollowingCard>
      <div className="text-white p-4">
        <div className="pb-4 text-center font-bold text-red-600">
          <h5>following</h5>
        </div>
        <div className="">{user.slice(0, 5).map((u) => (<p className="py-1.5" key={u.id}>{u.name}</p>))}</div>
      </div>
    </FollowingCard>
  );
};

export default Following;
