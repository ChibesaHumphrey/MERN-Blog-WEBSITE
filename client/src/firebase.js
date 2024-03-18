// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-580d5.firebaseapp.com",
  projectId: "mern-blog-580d5",
  storageBucket: "mern-blog-580d5.appspot.com",
  messagingSenderId: "103949223691",
  appId: "1:103949223691:web:176681d00bc8736f90040e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
