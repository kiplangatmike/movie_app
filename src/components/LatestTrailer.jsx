import { useEffect, useState } from "react";
import { getTTFB } from "web-vitals";
import LatestCard from "../UI/LatestCard";
import SingleCard from "./SingleCard";
import axios from "axios";

const LatestTrailer = () => {
  const [content, setContent] = useState([]);

  const fetchData = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    setContent(data);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchData();
  }, []);

  return (
    <LatestCard>
      <h3 className="pl-12 pt-4 font-bold text-white text-xl">
        Latest Trailers
      </h3>
      <div className="flex flex-wrap pl-12 ">
        {content && content.map((c) => (
          <SingleCard key={c.id} title={c.title} poster={c.poster}>
            <h1>hello</h1>
          </SingleCard>
        ))}
      </div>
    </LatestCard>
  );
};

export default LatestTrailer;
