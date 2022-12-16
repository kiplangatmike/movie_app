import { Children } from "react";

const FeedCard = (props) => {
    return (
        <div className="bg-gray-900 w-[20%] rounded m-2 ">{props.children}</div>
    )
}

export default FeedCard;