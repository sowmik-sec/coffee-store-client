// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlbgFxmW3r-iQSw5gJS4v8kT2Xd3iKH4s",
  authDomain: "coffee-store-5e243.firebaseapp.com",
  projectId: "coffee-store-5e243",
  storageBucket: "coffee-store-5e243.appspot.com",
  messagingSenderId: "895061116958",
  appId: "1:895061116958:web:18427a4e6534d88810060f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
