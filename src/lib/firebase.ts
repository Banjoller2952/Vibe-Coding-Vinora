import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZv39mN0gJjsNUsSKIWeg3Ro5QvHiYfP8",
  authDomain: "vinora-database.firebaseapp.com",
  projectId: "vinora-database",
  storageBucket: "vinora-database.firebasestorage.app",
  messagingSenderId: "500994862971",
  appId: "1:500994862971:web:60f354445883756953d7de",
  measurementId: "G-MC2L79XFR3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Auth & Providers
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Analytics if supported in environment
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
};
export type { FirebaseUser };
