// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBVSNZsnWr6wkBZdtvkNh6TfYBLBNZ-rUw",
  authDomain: "myecommerceweb-76c92.firebaseapp.com",
  projectId: "myecommerceweb-76c92",
  storageBucket: "myecommerceweb-76c92.firebasestorage.app",
  messagingSenderId: "756708776981",
  appId: "1:756708776981:web:6ca10c7a9a58d591aa821c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app);
export {
fireDB,
auth,
};