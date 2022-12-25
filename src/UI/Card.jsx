import { Children } from "react";

const Card = (props) => {
  return (
    <div className="bg-gold-900 mx-2 rounded-2xl drop-shadow-xl">
      {props.children}
    </div>
  );
};

export default Card;
