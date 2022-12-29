// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgtX_JqIRdFymCYepOsm_DF3vR6Redbfc",
  authDomain: "project-epicurious-241d1.firebaseapp.com",
  projectId: "project-epicurious-241d1",
  storageBucket: "project-epicurious-241d1.appspot.com",
  messagingSenderId: "854021280168",
  appId: "1:854021280168:web:df5fbccc6d24754fad4d9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
