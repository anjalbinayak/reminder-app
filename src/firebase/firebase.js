import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA25oHGChmdgXC-17P9-EWxmbuIT312hfk",
  authDomain: "reminderapp-b0548.firebaseapp.com",
  projectId: "reminderapp-b0548",
  storageBucket: "reminderapp-b0548.appspot.com",
  messagingSenderId: "859564763849",
  appId: "1:859564763849:web:b29d35d5aedb8a87f2bb18",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

export default app;
