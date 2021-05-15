import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDOnsdFUStckqU9krKx73036Dg3OC8dP5I",
  authDomain: "twitter-clone-304f1.firebaseapp.com",
  projectId: "twitter-clone-304f1",
  storageBucket: "twitter-clone-304f1.appspot.com",
  messagingSenderId: "611751688692",
  appId: "1:611751688692:web:772a378b901e6052eae1a1",
  measurementId: "G-R4EP66BQ5C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
