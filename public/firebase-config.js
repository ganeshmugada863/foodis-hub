// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4MLFE8tslgbNXLSkk8NRD67XZmOH4f4Q",
  authDomain: "foodis-hub.firebaseapp.com",
  projectId: "foodis-hub",
  storageBucket: "foodis-hub.firebasestorage.app",
  messagingSenderId: "662006376984",
  appId: "1:662006376984:web:320698986589838f67f16d",
  measurementId: "G-PN85H0TTL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
