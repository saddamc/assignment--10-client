// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA803_abgK7eHk6byKL1MtdfyGn6oXGU4",
  authDomain: "assignment-10-1e7c0.firebaseapp.com",
  projectId: "assignment-10-1e7c0",
  storageBucket: "assignment-10-1e7c0.appspot.com",
  messagingSenderId: "1024043574139",
  appId: "1:1024043574139:web:5de594f4c6beca071493de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
