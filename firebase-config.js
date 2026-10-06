import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBV1Fo7ss1-MsF7NaGYQj8pAPOus2u-WI4",
    authDomain: "campusconnect-3b142.firebaseapp.com",
    projectId: "campusconnect-3b142",
    storageBucket: "campusconnect-3b142.firebasestorage.app",
    messagingSenderId: "569294856668",
    appId: "1:569294856668:web:d614c7614df47af76f19",
    measurementId: "G-S7X6K6E8GT"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };