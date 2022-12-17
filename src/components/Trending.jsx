import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleCard from "./SingleCard";


// const axios = require("axios");

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=5b731350"
    );
    setContent(data.results);
    console.log(data);
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
    <div>
      <span>Trending Today</span>
      
      
      <div>
        {content &&
          content.map((c) => (
            <SingleCard
              key={c.Type}
            //   id={c.id}
            //   poster={c.poster_path}
              title={c.title || c.name}
              date={c.year || c.release_date}
            //   media_type={c.Genre}
            //   vote_average={c.Rated}
            />
          ))}
      </div>
    </div>
  );
};

export default Trending;
