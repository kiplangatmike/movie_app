import { Children } from "react";

const Card = (props) => {
    return (
        <div className="bg-dark_black mx-2 rounded-2xl drop-shadow-xl">{props.children}</div>
    )
}

export default Card;