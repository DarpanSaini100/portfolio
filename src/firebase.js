// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnZEYPjeKJgkxBZSeJmA7jqYMtjQPjq4k",
  authDomain: "darpan-portfolio.firebaseapp.com",
  projectId: "darpan-portfolio",
  storageBucket: "darpan-portfolio.appspot.com",
  messagingSenderId: "107392802179",
  appId: "1:107392802179:web:ccc6a43fcdcf06ceeeeab6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore ();