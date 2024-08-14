import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-9542f.firebaseapp.com",
  projectId: "reactchat-9542f",
  storageBucket: "reactchat-9542f.appspot.com",
  messagingSenderId: "327215559416",
  appId: "1:327215559416:web:41a8a7893e4356f0d3810d",
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

