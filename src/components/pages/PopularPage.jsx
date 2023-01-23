import React, { useEffect, useState } from "react";
import { img_url } from "../../api/Index";
import SingleTrendingCard from "../SingleTrendingCard";

const PopularPage = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchPopular = `
  https://api.themoviedb.org/3/discover/movie?api_key=a02cb89a765a86c8bf96b049622889fd&language=en-US`;

  useEffect(() => {
    fetch(fetchPopular)
      .then((response) => response.json())
      .then((json) => setContent(json));
      window.scroll(0, 0);
  }, [page]);
  return (
    <div className="flex flex-wrap bg-black justify-center">
      {content &&
        content?.results?.map((c) => (
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
    </div>
  );
};

export default PopularPage;
