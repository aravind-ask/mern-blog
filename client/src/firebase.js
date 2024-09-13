// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,  
  authDomain: "mern-blog-db81b.firebaseapp.com",
  projectId: "mern-blog-db81b",
  storageBucket: "mern-blog-db81b.appspot.com",
  messagingSenderId: "137864690229",
  appId: "1:137864690229:web:aa87fdd65b51916cce0f7c",
  measurementId: "G-H5TPFSF1ZV",
};
  console.log(import.meta.env.VITE_FIREBASE_API_KEY);


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
