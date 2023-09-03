// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS6WFFeIxVeAX4J6Y7H44vFMFbcgGOQmA",
  authDomain: "ecommerce-web-app-43888.firebaseapp.com",
  projectId: "ecommerce-web-app-43888",
  storageBucket: "ecommerce-web-app-43888.appspot.com",
  messagingSenderId: "715347718976",
  appId: "1:715347718976:web:327eccee2e1c395094c0a5",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName: displayName,
        email: email,
        createdTime: createAt,
        profileImage: photoURL,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth)
    .then(() => {
      console.log("User Signed out");
    })
    .catch((error) => {
      console.log("Error while signed out", error);
    });
};

export const onAuthStateChangedListener  =  (callBack) => onAuthStateChanged(auth,callBack);
