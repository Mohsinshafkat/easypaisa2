// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCD0kt5_zzKiHRezRFCGikxZ3IOJ4z5Ow",
  authDomain: "easypaisa-ss.firebaseapp.com",
  projectId: "easypaisa-ss",
  storageBucket: "easypaisa-ss.firebasestorage.app",
  messagingSenderId: "155485938229",
  appId: "1:155485938229:web:44a05f2d1368a9f4f8877c",
  measurementId: "G-88B1KL769C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
