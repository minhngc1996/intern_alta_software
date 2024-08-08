// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqmulsVrvbzZl8AzZeI0Z9pBWiKy-VUCI",
  authDomain: "user-firebase-150e8.firebaseapp.com",
  projectId: "user-firebase-150e8",
  storageBucket: "user-firebase-150e8.appspot.com",
  messagingSenderId: "455721425970",
  appId: "1:455721425970:web:29a18bbffed8604911f02b",
  measurementId: "G-WQPZP65D8N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { database };
