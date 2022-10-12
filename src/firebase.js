import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCL1mKY4JiVhvuY7aAb3Ptl1724yryqr1w",
  authDomain: "health-profile-ef9d3.firebaseapp.com",
  projectId: "health-profile-ef9d3",
  storageBucket: "health-profile-ef9d3.appspot.com",
  messagingSenderId: "300074296780",
  appId: "1:300074296780:web:aab34bf689e418f60c2969",
  measurementId: "G-18SNTEP4JK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app