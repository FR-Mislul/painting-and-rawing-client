// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOkKGPL396IXkXsqKZc3Vzg9ElWvWNV0M",
  authDomain: "painting-and-drawing-3fa49.firebaseapp.com",
  projectId: "painting-and-drawing-3fa49",
  storageBucket: "painting-and-drawing-3fa49.appspot.com",
  messagingSenderId: "168682224438",
  appId: "1:168682224438:web:1523f336331da6dd029197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;