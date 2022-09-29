// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5hE2cYYDB6t4-3Q5_dWqw323mHp7XVhI",
    authDomain: "voxel-studios-bb4a0.firebaseapp.com",
    projectId: "voxel-studios-bb4a0",
    storageBucket: "voxel-studios-bb4a0.appspot.com",
    messagingSenderId: "430777861256",
    appId: "1:430777861256:web:b14bd5618089becaba0b3d"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);