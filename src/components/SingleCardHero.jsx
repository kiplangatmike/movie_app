import { Badge } from "@mui/material";
import { unavailable, img_300 } from "../config/Config";
import ContentModal from "./ContentModal";

const SingleCardHero = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <div className="flex flex-col pb-2">
      <div className=" h-24 w-40  rounded-xl p-4 bg-yellow-900 0 mt-3 mr-4 flex flex-wrap drop-shadow-md" key={id}>
        <p>{title}</p>
        <img src={poster} alt="logo"/>
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

export default SingleCardHero;
