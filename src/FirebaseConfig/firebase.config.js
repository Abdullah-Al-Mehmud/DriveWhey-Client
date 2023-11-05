// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnAGM0oC4b1bHozZGpi1hnBIFbqqRQjXQ",
  authDomain: "assignment11-drivewhey.firebaseapp.com",
  projectId: "assignment11-drivewhey",
  storageBucket: "assignment11-drivewhey.appspot.com",
  messagingSenderId: "80079594655",
  appId: "1:80079594655:web:6952b0ce258bcb5f4b6eaa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
