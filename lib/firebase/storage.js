import db from "./firebaseConfig";

import { doc, setDoc } from "firebase/firestore"; 

export const createCollection = async (collectionName, docName, data) => {
    try {
       const docRef = doc(db, collectionName, docName);
       await setDoc(docRef, data);
       console.log('Document added successfully');
      } catch (e) {
        console.error('Error adding document: ', e);
      }
};

export const addToCollection = async (collectionName, data) => {
    try {
       const docRef = doc(db, collectionName);
       await setDoc(docRef, data);
       console.log('Document added successfully');
      } catch (e) {
        console.error('Error adding document: ', e);
      }
}