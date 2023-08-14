// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAg7oemyKvuMMJUjlzGUduwk4844QaJrw4",
    authDomain: "skate-e-commerce.firebaseapp.com",
    projectId: "skate-e-commerce",
    storageBucket: "skate-e-commerce.appspot.com",
    messagingSenderId: "286108316733",
    appId: "1:286108316733:web:a61ea7bffd08b338c56654",
    measurementId: "G-MVS5SSVL56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
