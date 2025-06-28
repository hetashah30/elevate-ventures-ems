// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration for authentication and Firestore
const authFirebaseConfig = {
  apiKey: "AIzaSyCWXLI8WIDPaxDVQMO2QB3765eAg5U765k",
  authDomain: "omnifood-3baa2.firebaseapp.com",
  projectId: "omnifood-3baa2",
  storageBucket: "omnifood-3baa2.firebasestorage.app",
  messagingSenderId: "600356230842",
  appId: "1:600356230842:web:41e4db862ec6b4acd81483",
};

// Initialize Firebase app for authentication
const authApp = initializeApp(authFirebaseConfig, "auth-app");

// Initialize Firebase Auth and Firestore
export const auth = getAuth(authApp);
export const db = getFirestore(authApp);

export default authApp;
