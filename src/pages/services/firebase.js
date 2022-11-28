import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyChVi_QFLlmUuw8-5BCTDok9XlJXgvILpM",
    authDomain: "ascc-41783.firebaseapp.com",
    projectId: "ascc-41783",
    storageBucket: "ascc-41783.appspot.com",
    messagingSenderId: "857689294584",
    appId: "1:857689294584:web:d3e80c51b1badffc7bdd0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)