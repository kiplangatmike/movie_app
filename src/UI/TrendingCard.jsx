const TrendingCard = (props) => {
  return (
    <div className="w-[94%] bg-black  my-4 mx-10 pb-2 rounded-2xl">
      {props.children}
    </div>
  );
};

export default TrendingCard;
