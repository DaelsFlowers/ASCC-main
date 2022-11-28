import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCe1y1ZIBmcQq5UncR-e0J3h0SIUwSIGrg",
    authDomain: "ascc-crm.firebaseapp.com",
    projectId: "ascc-crm",
    storageBucket: "ascc-crm.appspot.com",
    messagingSenderId: "15054169650",
    appId: "1:15054169650:web:d7900abbbe7bdbbb54be2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)