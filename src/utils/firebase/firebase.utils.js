import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAELrH5xzPKbG9k5nJW6_i2RJE9vHhlodM",
  authDomain: "ztm-ecommerce-bdd05.firebaseapp.com",
  projectId: "ztm-ecommerce-bdd05",
  storageBucket: "ztm-ecommerce-bdd05.appspot.com",
  messagingSenderId: "618924433862",
  appId: "1:618924433862:web:18ef6ecad5d3d87de4d2c7",
};

initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const signInWithEmail = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userDocSnapshot = await getDoc(userDocRef);

  if (!userDocSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating user: ", error.message);
    }

    return userDocRef;
  }
};

export const createAuthUserWithEmail = async (email, password) => {
  if (!email || !password) return;

  const createUser = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return createUser;
};

export const onAuthListener = (callback) => onAuthStateChanged(auth, callback);

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const queryObject = query(collectionRef);

  const querySnapshot = await getDocs(queryObject);

  const categoryMap = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    accumulator[title.toLowerCase()] = items;

    return accumulator;
  }, {});

  return categoryMap;
};
