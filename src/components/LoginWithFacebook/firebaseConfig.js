import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMD2EWiuME46anfn5fpGJt6HbN7SbKcgE",
  authDomain: "job-board-26f99.firebaseapp.com",
  projectId: "job-board-26f99",
  storageBucket: "job-board-26f99.appspot.com",
  messagingSenderId: "631417208726",
  appId: "1:631417208726:web:b0d8387ecb5709cd0827b7",
  measurementId: "G-L3NH139V59"
};


initializeApp(firebaseConfig);
export const auth = getAuth();
export const facebook = new FacebookAuthProvider();