import { Badge } from "@mui/material";
import { unavailable, img_300 } from "../config/Config";
import ContentModal from "./ContentModal";

const SingleCard = ({
  id,
  poster,
  title,
  img,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div className="flex flex-col pb-2">
      <div className=" h-72 w-42  rounded-xl p-4 bg-yello 0 mt-3 mr-4 flex flex-wrap drop-shadow-md">
        <img src={img} alt="" className="rounded-xl object-fill"/>
        <p className="text-white">{title}</p>
        <p className="text-white">{poster}</p>
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
