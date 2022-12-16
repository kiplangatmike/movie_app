import { Children } from "react";

const Card = (props) => {
    return (
        <div className="bg-gray-900 mx-2 rounded">{props.children}</div>
    )
}

export default Card;