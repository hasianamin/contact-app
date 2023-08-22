import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBfh53LDGlV7jBAqcTzNS4DRXbkBf4P64",
  authDomain: "my-contact-app-c5ca6.firebaseapp.com",
  projectId: "my-contact-app-c5ca6",
  storageBucket: "my-contact-app-c5ca6.appspot.com",
  messagingSenderId: "317978403706",
  appId: "1:317978403706:web:f461a5b62c14a8a9996cc3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
