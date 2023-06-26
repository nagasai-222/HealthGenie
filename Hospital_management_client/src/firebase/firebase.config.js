// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  apiKey: "AIzaSyAuuSuCcfwJazwOTP70CqmLL711Zu4otLk",
  authDomain: "healthcare-2f8a3.firebaseapp.com",
  projectId: "healthcare-2f8a3",
  storageBucket: "healthcare-2f8a3.appspot.com",
  messagingSenderId: "429577514958",
  appId: "1:429577514958:web:9989fa08f112960add459f",
  measurementId: "G-6HNRMQ3X4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
