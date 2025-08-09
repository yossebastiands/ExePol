import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUBjm7hjnwBQe7NkLfWFDvLfo1MuS7Jq4",
  authDomain: "exepol-95459.firebaseapp.com",
  projectId: "exepol-95459",
  storageBucket: "exepol-95459.firebasestorage.app",
  messagingSenderId: "538383887814",
  appId: "1:538383887814:web:b32b3c5d96a97af8024303"
  // measurementId is optional and not needed here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
