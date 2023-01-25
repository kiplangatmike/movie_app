import React, { useState, useEffect } from "react";
import { img_url } from "../../api/Index";
import SingleTrendingCard from "../SingleTrendingCard";
import useGenre from '../../hooks/useGenre';
import axios from "axios";

const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=a02cb89a765a86c8bf96b049622889fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
    // console.log(data);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [genreforURL, page]);
  return (
    <React.Fragment>
      <div className="flex flex-wrap bg-black mx-4 rounded-xl justify-center">
        {content &&
          content?.map((c) => (
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
    </React.Fragment>
  );
};

export default Movies;
