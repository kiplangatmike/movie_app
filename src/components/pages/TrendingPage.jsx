import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard";
import { img_url } from "../../api/Index";
import CustomPagination from "../pagination/CustomPagination";
import SingleTrendingCard from "../SingleTrendingCard";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const TrendingPage = () => {
  const [timeData, setTimeData] = useState("day");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const fetchtrending = `https://api.themoviedb.org/3/trending/movie/${timeData}?api_key=14ccdb96456935bbb41591e99697d262`;

  useEffect(() => {
    fetch(fetchtrending)
      .then((response) => response.json())
      .then((json) => setContent(json));
      setIsPending(false)
    window.scroll(0, 0);
  }, [page]);
  return (
      
      <div className="flex flex-wrap bg-black justify-center mx-4 rounded-xl">
        {isPending && <div>Loading</div>}
        {content?.results?.map((c) => (
          <SingleTrendingCard
            key={c.id}
            id={c.id}
            poster={`${img_url}${c.poster_path}`}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type={c.media_type}
            vote_average={c.vote_average}
            className='justify-center'
          />
        ))}
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default TrendingPage;
