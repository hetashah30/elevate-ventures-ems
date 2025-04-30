// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAeJH6AGPmuhdMCg28LgpSxcHH4vzulsUE",
//   authDomain: "ems-form-dd747.firebaseapp.com",
//   databaseURL: "https://ems-form-dd747-default-rtdb.firebaseio.com",
//   projectId: "ems-form-dd747",
//   storageBucket: "ems-form-dd747.firebasestorage.app",
//   messagingSenderId: "407910106201",
//   appId: "1:407910106201:web:c08b807cb8a6914e4e9d48"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeJH6AGPmuhdMCg28LgpSxcHH4vzulsUE",
  authDomain: "ems-form-dd747.firebaseapp.com",
  databaseURL: "https://ems-form-dd747-default-rtdb.firebaseio.com",
  projectId: "ems-form-dd747",
  storageBucket: "ems-form-dd747.appspot.com",
  messagingSenderId: "407910106201",
  appId: "1:407910106201:web:c08b807cb8a6914e4e9d48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the initialized database
export const db = getDatabase(app);
