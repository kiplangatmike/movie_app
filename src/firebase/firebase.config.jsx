// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrIOha1lY62ShB_VmhT1Gj1SUsfB_Z78A",
  authDomain: "movie-app-7dc7f.firebaseapp.com",
  projectId: "movie-app-7dc7f",
  storageBucket: "movie-app-7dc7f.appspot.com",
  messagingSenderId: "818674621886",
  appId: "1:818674621886:web:065bd8d605eb61e2712def",
  measurementId: "G-ME9PMM6BEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, {
    experimentalForceLongPooling: true,
    useFetchStreams: false,
});
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();