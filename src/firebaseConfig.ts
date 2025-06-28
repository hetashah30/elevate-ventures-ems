// src/firebaseConfig.ts - Form Submissions Database
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration for form submissions
const formFirebaseConfig = {
  apiKey: "AIzaSyAeJH6AGPmuhdMCg28LgpSxcHH4vzulsUE",
  authDomain: "ems-form-dd747.firebaseapp.com",
  databaseURL: "https://ems-form-dd747-default-rtdb.firebaseio.com",
  projectId: "ems-form-dd747",
  storageBucket: "ems-form-dd747.appspot.com",
  messagingSenderId: "407910106201",
  appId: "1:407910106201:web:c08b807cb8a6914e4e9d48",
};

// Initialize Firebase app for forms with a specific name
const formAppName = "form-app";
let formApp;

try {
  // Check if the form app already exists
  formApp = getApp(formAppName);
} catch (error) {
  // If it doesn't exist, create it
  formApp = initializeApp(formFirebaseConfig, formAppName);
}

// Export the initialized database for form submissions
export const formDb = getDatabase(formApp);

export default formApp;
