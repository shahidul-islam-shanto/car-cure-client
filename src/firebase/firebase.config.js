// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGIT9sQlsVzMP30S-AS_ePaYFqHQ2arl8",
  authDomain: "car-doctor-client-b927e.firebaseapp.com",
  projectId: "car-doctor-client-b927e",
  storageBucket: "car-doctor-client-b927e.firebasestorage.app",
  messagingSenderId: "663740230579",
  appId: "1:663740230579:web:36faacad7a9fa9967db9c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
