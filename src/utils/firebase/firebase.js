import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC32XywivCxCvuv5xKEE7QjMyb58E7hht0",
  authDomain: "ecomm-deb08.firebaseapp.com",
  projectId: "ecomm-deb08",
  storageBucket: "ecomm-deb08.appspot.com",
  messagingSenderId: "788067043472",
  appId: "1:788067043472:web:d1f555b7bae1dbc58a7015",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account ",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// initiate firestore
export const db = getFirestore();

// create a user from provided auth value
export const createUserFromAuth = async (authUser, info = {}) => {
  const userDocRef = doc(db, "users", authUser.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = authUser;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...info });
    } catch (error) {
      console.log("Error creating a user" + error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithCredentials = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithCredentials = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
