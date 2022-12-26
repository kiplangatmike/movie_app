import TrendingCard from "../UI/TrendingCard";
import SingleCard from "./SingleCard";
const LatestTrailer = () => {
  return (
    <TrendingCard>
      <h3 className="pl-12 pt-4 font-bold text-white text-xl">
        Latest Trailers
      </h3>
      <div className="flex flex-wrap pl-12 ">
        <SingleCard>
          <div>hello</div>
        </SingleCard>
      </div>
    </TrendingCard>
  );
};

export default LatestTrailer;
