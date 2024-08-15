import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCOt6sECCRXs6qkugFv_vNJ3iqUkflrMCM",
  authDomain: "crud-firebase-2bc49.firebaseapp.com",
  projectId: "crud-firebase-2bc49",
  storageBucket: "crud-firebase-2bc49.appspot.com",
  messagingSenderId: "165735529832",
  appId: "1:165735529832:web:7f1fdd7573593137b86add",
  measurementId: "G-PEB4GR41KC",
  //Thực hiện config Firebase từ CSDL firebase
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database };
