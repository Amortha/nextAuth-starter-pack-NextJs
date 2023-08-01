// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvrRxpxkT5Q-SR4F5EzjYXOv9HCFTT7Ow",
  authDomain: "nextauth-efe1f.firebaseapp.com",
  projectId: "nextauth-efe1f",
  storageBucket: "nextauth-efe1f.appspot.com",
  messagingSenderId: "788486884792",
  appId: "1:788486884792:web:5ed19d1606e641f9b0d34d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;