import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Loading = (props) => {
  const [loading, setLoading] = useState(false);
  // const location = useLocation();

  useLayoutEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (!props.children) {
    return (
      <>
        <div>
          <div>
            <div></div>
            <div></div>
          </div>
          <p>Loading . . .</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        {loading && (
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
            <p>Loading . . .</p>
          </div>
        )}
        {!loading && props.children}
      </>
    );
  }
};

export default Loading;