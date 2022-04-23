// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK_jtvv3KLVreDHtqS-0zlq1qgd2QJ9nE",
  authDomain: "genius-car-services-b0f51.firebaseapp.com",
  projectId: "genius-car-services-b0f51",
  storageBucket: "genius-car-services-b0f51.appspot.com",
  messagingSenderId: "777868748476",
  appId: "1:777868748476:web:7b27f02182db055be912b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
