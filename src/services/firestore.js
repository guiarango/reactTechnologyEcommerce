import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHr-ILEPg7DCwlWDCNyCMmm2ZaOO-z91s",
  authDomain: "ecommerceproject-91d00.firebaseapp.com",
  projectId: "ecommerceproject-91d00",
  storageBucket: "ecommerceproject-91d00.appspot.com",
  messagingSenderId: "57671276202",
  appId: "1:57671276202:web:4063b63fb9eee9999de2d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);
