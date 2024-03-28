// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "deerblog-7f31c.firebaseapp.com",
  projectId: "deerblog-7f31c",
  storageBucket: "deerblog-7f31c.appspot.com",
  messagingSenderId: "354775029217",
  appId: "1:354775029217:web:268dba01d67fe14ffd2ea0"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);