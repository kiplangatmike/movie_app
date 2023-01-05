const TrendingCard = (props) => {
  return (
    <div className="w-[97%] bg-black  my-5 mx-4 pb-2 rounded-2xl">
      {props.children}
    </div>
  );
};

export default TrendingCard;
