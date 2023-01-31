import { Badge } from "@mui/material";
import { unavailable, img_300 } from "../config/Config";
import ContentModal from "./ContentModal";

const SingleCard = ({
  id,
  poster,
  title,
  release_date,
  date,
  media_type,
  vote_average,
}) => {
  return (
<div className="hover flex flex-col h-full p-3 text-white rounded-xl select-none movie-card" path="trendingpage">
<div className="relative">
  <img
    className="w-full object-cover rounded-lg mb-5 max-h-[600px] hover:opacity-50"
    src={poster}
    alt=""
  />
</div>
<h3 className="mb-3 text-xl text-bold">{title}</h3>
<div className="flex flex-col justify-end flex-1">
  <div className="flex items-center justify-between mb-5 text-sm opacity-50">
    <span>
      {release_date}
      {/* <button fluid>Watch Now</button> */}
    </span>
    
  </div>
    {/* <button fluid>Watch Now</button> */}
</div>
</div>

    // <ContentModal media_type={media_type} id={id}>
    //   <Badge
    //     badgeContent={vote_average}
    //     color={vote_average > 6 ? "primary" : "secondary"}
    //   />
    //   <img src={poster ? `${img_300}${poster}` : unavailable} alt={title} />
    //   <b>{title}</b>
    //   <span>
    //     {media_type === "tv" ? "TV Series" : "Movie"}
    //     <span>{date}</span>
    //   </span>
    // </ContentModal>
  );
};

export default SingleCard;
