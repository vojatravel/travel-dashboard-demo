import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYJszIejVOEBCkzveq0JInvLdM99poxJ0",
  authDomain: "voja-demo.firebaseapp.com",
  projectId: "voja-demo",
  storageBucket: "voja-demo.appspot.com",
  messagingSenderId: "927192499156",
  appId: "1:927192499156:web:b1fe0f7a2757957d854c41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db