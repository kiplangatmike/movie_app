import { Children } from "react";

const FeedCard = (props) => {
    return (
        <div className="fixed bg-gray-900 w-[20%] rounded ml-2 ">{props.children}</div>
    )
}

export default FeedCard;