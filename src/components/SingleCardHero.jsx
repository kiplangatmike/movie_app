import { Badge } from "@mui/material";
import { unavailable, img_300 } from "../config/Config";
import ContentModal from "./ContentModal";

const SingleCardHero = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div
      className="rounded-xl p-4 bg-y right-12   h-32  mr-4 flex flex-wrap drop-shadow-md"
      key={id}
    >
      <p>{title}</p>
      <img src={poster} alt="logo" />
    </div>
  );
};

export default SingleCardHero;
