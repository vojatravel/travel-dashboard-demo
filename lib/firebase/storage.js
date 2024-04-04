import db from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const createCollection = async (collectionName, docName, data) => {
  try {
    const docRef = doc(db, collectionName, docName);
    await setDoc(docRef, data);
    console.log("Document added successfully");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const addToCollection = async (collectionName, data) => {
  try {
    const docRef = doc(db, collectionName);
    await setDoc(docRef, data);
    console.log("Document added successfully");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const readCollection = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const collectionData = []; 
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      collectionData.push({ id: doc.id, ...doc.data() });
    });
    return collectionData; 
  } catch (e) {
    console.error("Error getting documents: ", e);
    throw new Error(e);
  }
};