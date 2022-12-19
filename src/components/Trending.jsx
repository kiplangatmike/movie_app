import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleCard from "./SingleCard";
import TrendingCard from "../UI/TrendingCard";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

    const fetchTrending = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
    //   console.log(JSON.stringify(data));
      setContent(data);
    //   console.log(data);
    };

    useEffect(() => {
      window.scroll(0, 0);
      fetchTrending();
    }, [page]);

  // axios
  //   .get("http://www.omdbapi.com/?i=tt3896198&apikey=5b731350")
  //   .then(function (response) {
  //     console.log(response.data);
  //     setContent(response.data);
  //   });

  return (
    <TrendingCard>
      <div>
        <h3 className="pl-12 pt-4 font-bold text-white text-xl">Trending Today</h3>

        <div className="flex flex-wrap pl-12 ">
          {content &&
            content.map((c) => (
              <SingleCard
                key={c.id}
                title={c.name}
                poster={c.username}
              ></SingleCard>
            ))}
        </div>
      </div>
    </TrendingCard>
  );
};

export default Trending;
