import { useParams } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import {
  fetchSingleMovie,
  fetchSingleMovieCredits,
  fetchReviews,
  fetchRecommendations,
} from "../api/Index";
// import Card from "../Card"
import { Cast, CastDescription, CrewCard } from "./CastCard";
import { useEffect } from "react";
import { useContext } from "react";
import Slider from "react-slick";
import CastSliderSettings from "../components/CastSliderSettings";
import { BiCameraMovie } from "react-icons/bi";
import TrendingCard from "../UI/TrendingCard";

//import { Card } from '@mui/material';
const Detailspage = (props) => {
  const { movieId } = useParams();

  const reviewsQuery = useQuery(
    ["reviews", movieId],
    () => fetchReviews(movieId),
    { retry: false, select: (state) => state?.data }
  );
  console.log("REVIEWS:::", reviewsQuery);

  const movieQuery = useQuery(
    ["movie", movieId],
    () => fetchSingleMovie(movieId),
    { retry: false, select: (state) => state?.data }
  );
  console.log("movieQuery:::", movieQuery);
  const movieCreditsQuery = useQuery(
    ["moviecredits", movieId],
    () => fetchSingleMovieCredits(movieId),
    { retry: false, select: (state) => state?.data }
  );
  console.log("movieCast:::", movieCreditsQuery);
  const movieData = movieQuery?.data;

  const reviewsData = reviewsQuery?.data;
  console.log("Reviews:::", reviewsData);
  const movieCastData = movieCreditsQuery?.data?.cast;
  const movieCrewData = movieCreditsQuery?.data?.crew;
  const job = ["director", "producer"];
  const recommendations = useQuery(
    ["movie recommendations", movieId],
    () => fetchRecommendations(movieId),
    {
      retry: false,
    }
  );
  return (
    <>
      {/* <h1 className="d-flex justify-content-center">Detail Page</h1> */}

      <div className=" bg-black m-4 container rounded-xl">
        <div className="container flex ">
          <div className="w-[50%]">
            <img
              className="m-4 rounded-xl "
              key={movieData?.id}
              style={{ width: "20rem" }}
              src={`https://image.tmdb.org/t/p/w500` + movieData?.poster_path}
              alt=""
            />
          </div>
          <div className="offset-1 text-white m-4 w-[100%]">
            <h3>Movie Name: {movieData?.title}</h3>
            <h5>Overview: </h5>
            <h6 className="col-sm-8 justif-content-center my-2">
              {movieData?.overview}
            </h6>
            <h6>
              Movie Released Date:<span>{movieData?.release_date}</span>
            </h6>
            <h6 className="">
              Genre:
              {movieData?.genres.map((item) => (
                <div key={item?.id} className="inline-block px-2">
                  {item.name}{" "}
                </div>
              ))}
            </h6>
            <h6>Crew:</h6>
            {movieCrewData
              ?.filter((item) => job.includes(item.job.toLowerCase()))
              .map((item) => (
                <CrewCard key={item} className="text-black">
                  <strong className="text-black">
                    {" "}
                    <BiCameraMovie />
                    {item.job}
                  </strong>
                  : {item.name}
                </CrewCard>
              ))}
          </div>
        </div>
      </div>
      <div className="bg-black  rounded-xl ml-4 p-4">
        <h2 className="m-4 text-white">Film Cast:</h2>
        <div
          className="container mx-12 bg-black d-flex flex-row justify-content-center row mb-2"
          style={{ backgroundColor: "#ecf0f1ey" }}
        >
          <Slider {...CastSliderSettings}>
            {movieCastData?.map((item) => (
              <Cast key={item.id}>
                <img
                  className="rounded"
                  key={item}
                  width={"100"}
                  height={"150"}
                  src={
                    item.profile_path === null
                      ? `https://tigres.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png`
                      : ` https://image.tmdb.org/t/p/w200${item?.profile_path}`
                  }
                  alt=""
                />
                <CastDescription>
                  <h6 style={{ color: "#2c3e50" }}>
                    <strong>{item.name}</strong>
                  </h6>
                  <h6 style={{ color: "#2c3e50" }}>Role:{item.character}</h6>
                </CastDescription>
              </Cast>
            ))}
          </Slider>
        </div>
      </div>

      <div className="row text-white bg-black m-4 rounded-xl p-4">
        <h5>Reviews:</h5>
        <div className="review-part">
          <div className="col-sm-6">
            <p style={{ color: "#8e44ad" }}>
              <span>{reviewsData?.results[0]?.author[0].toUpperCase()}</span>
              {reviewsData?.results[0]?.author}
            </p>{" "}
            {reviewsData?.results[0]?.content?.slice(0, 300)}..
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailspage;
