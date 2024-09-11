// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAng0yh3O9E3PS8bG7aaerDnLejWjmQTD8",
  authDomain: "mern-blog-db81b.firebaseapp.com",
  projectId: "mern-blog-db81b",
  storageBucket: "mern-blog-db81b.appspot.com",
  messagingSenderId: "137864690229",
  appId: "1:137864690229:web:aa87fdd65b51916cce0f7c",
  measurementId: "G-H5TPFSF1ZV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
