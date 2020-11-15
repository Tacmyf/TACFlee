import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAgO4v-YEAqIC-g27l8mSRZQAq9o2waqc",
  authDomain: "flee-1866b.firebaseapp.com",
  databaseURL: "https://flee-1866b.firebaseio.com",
  projectId: "flee-1866b",
  storageBucket: "flee-1866b.appspot.com",
  messagingSenderId: "1075023023383",
  appId: "1:1075023023383:web:631621380b118061cf3b52",
  measurementId: "G-FCM86CXX22",
};

if (!firebase.apps.length) {
  console.log("=================> wokringgg");
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
