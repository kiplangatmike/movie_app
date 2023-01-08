import { doc, updateDoc } from "firebase/firestone";
import { AiFillHeart } from "react-icons/ai";
import { useAuth } from "../context/auth-context";
import { db } from "../firebase/firebase.config";

const removefavourite = async (e, idMovie, mediaType, user) => {
  if (user) {
    e.preventDefault();
    const nreListFavorite = user.nreListFavorite.filter(
      (item) => item.id !== idMovie
    );
    const updateData = doc(db, "users", user?.id);
    await updateDoc(updateData, {
      listFavourite: [...newListFavorite],
    }).then(() => {
      console.log("Success");
    });
  } else {
    console.log("Failed");
  }
};

const Heart = ({ id, mediaType, className = "" }) => {
  const { userInfo } = useAuth();
  return (
    <span
      onClick={(e) => removeFavorite(e, id, mediaType, userInfo)}
      className={`cursor-pointer ${className}`}
    >
        <AiFillHeart></AiFillHeart>
    </span>
  );
};

export default Heart;
