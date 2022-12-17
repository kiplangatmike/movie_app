import { Badge } from "@mui/material";
import { unavailable, img_300 } from "../config/Config";
import ContentModal from "./ContentModal";

const SingleCard = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <p>{title}</p>
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
