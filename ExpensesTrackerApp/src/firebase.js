// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_6o0EZfSemsK3S9dyjF8u_iygm-qyaJw",
  authDomain: "expensestrackerapp31.firebaseapp.com",
  projectId: "expensestrackerapp31",
  storageBucket: "expensestrackerapp31.firebasestorage.app",
  messagingSenderId: "863282705201",
  appId: "1:863282705201:web:f9139695f5c947246f3610"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
