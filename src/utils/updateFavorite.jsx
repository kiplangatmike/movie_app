import {
    doc, updateDoc, arrayUnion, onSnapshot, collection,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { db } from "../firebase/firebase.config";
import { AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-toastify";