// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg2gu9b4SorsbUTMtylVMwbHcNittj0Qc",
  authDomain: "netflix-clone-2ae8c.firebaseapp.com",
  projectId: "netflix-clone-2ae8c",
  storageBucket: "netflix-clone-2ae8c.appspot.com",
  messagingSenderId: "172215438159",
  appId: "1:172215438159:web:bd450f55c164dbb196133a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }