// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD07mLCfLC4jeEiHxSFa7c9yQkAY7OWy9o",
  authDomain: "netflix-gpt-22818.firebaseapp.com",
  projectId: "netflix-gpt-22818",
  storageBucket: "netflix-gpt-22818.appspot.com",
  messagingSenderId: "154683948965",
  appId: "1:154683948965:web:1535d000d081ac0143324c",
  measurementId: "G-V5Y4SD0FSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth()