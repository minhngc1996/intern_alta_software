import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByJMzP8gVKYSxiBR50sEKrWwIEYsX20ug",
  authDomain: "phutho-tourist-e9654.firebaseapp.com",
  projectId: "phutho-tourist-e9654",
  storageBucket: "phutho-tourist-e9654.appspot.com",
  messagingSenderId: "900595917560",
  appId: "1:900595917560:web:4c508c722abffed6f7d10d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
