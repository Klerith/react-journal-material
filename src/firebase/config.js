// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9qM8LKYti4TZus0g00ISzMjudet-H2vg",
  authDomain: "react-cursos-4368a.firebaseapp.com",
  projectId: "react-cursos-4368a",
  storageBucket: "react-cursos-4368a.appspot.com",
  messagingSenderId: "35683178704",
  appId: "1:35683178704:web:2cab2003319bbac2eba6d5"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );