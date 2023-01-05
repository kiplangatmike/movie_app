import axios from "axios";

export const BASE_API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
const BASE_AXIOS = axios.create({
  baseURL: "https://api.themoviedb.org/3%22%7D",
});
export const API_KEY = "a02cb89a765a86c8bf96b049622889fd";
export const Popular_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=a02cb89a765a86c8bf96b049622889fd&language=en-US&page=1";

export const Discover_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=14ccdb96456935bbb41591e99697d262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

export const img_url = "http://image.tmdb.org/t/p/w500";
export const fetchSingleMovie = (movieId) =>
  BASE_AXIOS.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
