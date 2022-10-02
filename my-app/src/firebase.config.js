// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvToYCTKuBTZdETzohu6LSKsmBKTQrDtg",
  authDomain: "sephora-74543.firebaseapp.com",
  projectId: "sephora-74543",
  storageBucket: "sephora-74543.appspot.com",
  messagingSenderId: "184198597429",
  appId: "1:184198597429:web:939e0d27a7af110dfa9a7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app)

// export const provider = new GoogleAuthProvider();

export {app} ;