import React, { useState } from "react";
import SingleTrendingCard from "../SingleTrendingCard";

const Series = () => {
  const [genre, setGenre] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const genreforURL = useGenre();

  const fetchSeries = `https://api.themoviedb.org/3/discover/movie?api_key=a02cb89a765a86c8bf96b049622889fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`;

  useEffect(() => {
    fetch(fetchSeries)
      .then((response) => response.json())
      .then((json) => setContent(json))
      console.log(content)
    //   .then((json) => setNumOfPages(json));
    window.scroll(0, 0);
  }, [genreforURL, page]);
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

export default fetchSeries;
