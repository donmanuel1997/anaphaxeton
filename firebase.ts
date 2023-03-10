import { getApp, getApps, initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAw2LSGkYjtFpJfxZkiPo_xdBB7--9cnms",
    authDomain: "chatgpt-e03d7.firebaseapp.com",
    projectId: "chatgpt-e03d7",
    storageBucket: "chatgpt-e03d7.appspot.com",
    messagingSenderId: "1099211178540",
    appId: "1:1099211178540:web:3903cd5924b2dd41d8c789"
  };
  
  // Initialize Firebase
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};