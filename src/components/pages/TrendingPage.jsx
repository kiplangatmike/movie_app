import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard";
import { img_url } from "../../api/Index";
import CustomPagination from "../pagination/CustomPagination";
import SingleTrendingCard from "../SingleTrendingCard";

const TrendingPage = () => {
  const [timeData, setTimeData] = useState("day");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const fetchtrending = `https://api.themoviedb.org/3/trending/movie/${timeData}?api_key=14ccdb96456935bbb41591e99697d262`;

  useEffect(() => {
    fetch(fetchtrending)
      .then((response) => response.json())
      .then((json) => setContent(json));
    window.scroll(0, 0);
  }, [page]);
  return (
    <div>
      <div className="flex flex-wrap">
        {content?.results?.map((c) => (
          <SingleTrendingCard
            key={c.id}
            id={c.id}
            poster={`${img_url}${c.poster_path}`}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type={c.media_type}
            vote_average={c.vote_average}
          />
        ))}
      </div>\
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default TrendingPage;
