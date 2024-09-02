// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAeqcG3Q--r89oVavJClgdeTOQrjPjuy0",
  authDomain: "clone-30b21.firebaseapp.com",
  projectId: "clone-30b21",
  storageBucket: "clone-30b21.appspot.com",
  messagingSenderId: "613234651131",
  appId: "1:613234651131:web:ba0297f22ef183a0bf255e",
  measurementId: "G-4204B0SZZ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;
