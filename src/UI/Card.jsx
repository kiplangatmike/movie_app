import { Children } from "react";

const Card = (props) => {
    return (
        <div className="bg-gray-900">{props.children}</div>
    )
}

export default Card;