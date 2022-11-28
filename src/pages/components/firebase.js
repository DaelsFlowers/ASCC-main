import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDwyjb1P5miodMyyxWz2c5q0Ubhxjii7H4",
    authDomain: "ascc-787ed.firebaseapp.com",
    projectId: "ascc-787ed",
    storageBucket: "ascc-787ed.appspot.com",
    messagingSenderId: "1082982546977",
    appId: "1:1082982546977:web:10f2261d885c2590db6d60",
    measurementId: "G-TL1LXVKK0G"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)