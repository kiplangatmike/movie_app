import { Children } from "react";

const FeedCard = (props) => {
    return (
        <div className="bg-black  rounded-2xl m-2 shadow-2xl">{props.children}</div>
    )
}

export default FeedCard;