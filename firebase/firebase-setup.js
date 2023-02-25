// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBey2kHsCCYQOBUp8Fe1lnXFeTpabfxoTI",
  authDomain: "ass2-71c7f.firebaseapp.com",
  projectId: "ass2-71c7f",
  storageBucket: "ass2-71c7f.appspot.com",
  messagingSenderId: "531956464456",
  appId: "1:531956464456:web:cf44cc170e6486e0fd517d",
  measurementId: "G-9760BEQ93S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);