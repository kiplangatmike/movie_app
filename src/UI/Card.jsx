
const Card = (props) => {
  return (
    <div className="bg-gold-900 mx-2 my-6 rounded-2xl drop-shadow-xl">
      {props.children}
    </div>
  );
};

export default Card;
