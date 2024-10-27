// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6Uyu9w_7UgkTd8mBGbB6Zz6qdoD_ukY0",
  authDomain: "anagha-front-react.firebaseapp.com",
  projectId: "anagha-front-react",
  storageBucket: "anagha-front-react.appspot.com",
  messagingSenderId: "872423163112",
  appId: "1:872423163112:web:29cc8d888ff8a95ffa355d",
  measurementId: "G-H6Z46WJGL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);