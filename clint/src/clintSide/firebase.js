// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDXU0mCfjRgy5Cwo7kgNS4MlXS6edtCN88",
    authDomain: "task-c4f47.firebaseapp.com",
    projectId: "task-c4f47",
    storageBucket: "task-c4f47.appspot.com",
    messagingSenderId: "721964150853",
    appId: "1:721964150853:web:997e30c905d91940acf32c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
