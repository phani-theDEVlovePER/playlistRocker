// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmB1-Txw-9-MAVj69-TntMsuPMAyD5qNo",
  authDomain: "playlistrocker-no-ads.firebaseapp.com",
  projectId: "playlistrocker-no-ads",
  storageBucket: "playlistrocker-no-ads.appspot.com",
  messagingSenderId: "605040186094",
  appId: "1:605040186094:web:db6b39b5ca8bbc129019ff",
  measurementId: "G-NXTY5966T4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);