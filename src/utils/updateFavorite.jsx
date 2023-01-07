import {
  doc,
  updateDoc,
  arrayUnion,
  onSnapshot,
  collection,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { db } from "../firebase/firebase.config";
import { AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-toastify";
const updateFavorite = async (e, idMovie, mediaType, user) => {
  if (user) {
    e.preventDefault();
    const updateData = doc(db, "users", user.id);
    await updateDoc(updateData, {
      listFavorite: arrayUnion({ id: idMovie, type: mediaType }),
    }).then(() => {
      console.log("Success");
    });
  } else {
    toast.error("ypu have to sign in first!");
  }
};

const add = ({ id, mediaType }) => {
  const { userInfo } = useAuth();
  return (
    <span onClick={(e) => updateFavorite(e, id, mediaType, userInfo)}>
      <AiOutlinePlus></AiOutlinePlus>
      <span>Add to favourite</span>
    </span>
  );
};

export {add, updateFavorite};
