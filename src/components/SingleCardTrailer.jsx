import { Badge } from "@mui/material";
import { unavailable, img_300 } from "../config/Config";
import ContentModal from "./ContentModal";

const SingleCardTrailer = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <div className="flex flex-col pb-2 ">
      <div className=" h-32 w-44 rounded p-4 bg-yellow-900 0 mt-3 mr- flex flex-wrap drop-shadow-md">
        <p>{title}</p>
        <p>{poster}</p>
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

export default SingleCardTrailer;
