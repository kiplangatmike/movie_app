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
    // <div className="flex flex-col pb-2">
    //   <div className="w-42  rounded-xl p-4 bg-yello 0 mt-3 mr-4 flex flex-col drop-shadow-md">
    //     <img src={img} alt="" className="rounded-xl object-fill h-54 w-50" />
    //     <div className="">
    //       <p className="text-white font-bold">{title}</p>
    //       <p className="text-white absolute bottom-0 left-4">{poster}</p>
    //     </div>
    //   </div>
    // </div>

<div className="flex flex-col h-full p-3 text-white rounded-xl select-none movie-card">
<div className="relative">
  <img
    className="w-full object-cover rounded-lg mb-5 max-h-[600px]"
    src={img}
    alt=""
  />
</div>
<h3 className="mb-3 text-xl text-bold">{title}</h3>
<div className="flex flex-col justify-end flex-1">
  <div className="flex items-center justify-between mb-5 text-sm opacity-50">
    <span>
      {poster}
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
