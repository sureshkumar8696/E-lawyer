// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB26bqXqQEjeMjtZror4A7nGiuAW0yS5gg",
    authDomain: "e-lawyer-auth.firebaseapp.com",
    projectId: "e-lawyer-auth",
    storageBucket: "e-lawyer-auth.appspot.com",
    messagingSenderId: "493800267839",
    appId: "1:493800267839:web:fc95187a59ddcfd121d88a",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

