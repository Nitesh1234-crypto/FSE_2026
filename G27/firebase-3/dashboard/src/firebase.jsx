// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACFk487TU4qoZKDK-qwDZSi16nL0rsK-g",
  authDomain: "g27firebase.firebaseapp.com",
  projectId: "g27firebase",
  storageBucket: "g27firebase.firebasestorage.app",
  messagingSenderId: "964149733227",
  appId: "1:964149733227:web:e743649131a9c71bb80e2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);