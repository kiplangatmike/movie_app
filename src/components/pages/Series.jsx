import React, { useState } from "react";
import { img_url } from "../../api/Index";
import SingleTrendingCard from "../SingleTrendingCard";

const Series = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchMovies = ``;

  useState(() => {
    fetch(fetchMovies)
      .then((response) => response.json())
      .then((json) => setContent(json));
    window.scroll(0, 0);
  }, [page]);
  return (
    <div>
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

export default Series;
