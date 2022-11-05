import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkJMBU_yIk3XsNPUOSxNxxAyL5JGXIt5c",
  authDomain: "tacuautli.firebaseapp.com",
  projectId: "tacuautli",
  storageBucket: "tacuautli.appspot.com",
  messagingSenderId: "835145281211",
  appId: "1:835145281211:web:a92d72e73893db7ed8c39e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
