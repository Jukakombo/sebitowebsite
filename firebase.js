import firebase from "firebase";
import "firebase/storage";
const firebaseConfiq = {
  apiKey: "AIzaSyA6TiTqPViYgFV13Go5ImMHw8jdNyogyP0",
  authDomain: "jbgeneraltradingcoltd-aeb54.firebaseapp.com",
  projectId: "jbgeneraltradingcoltd-aeb54",
  storageBucket: "jbgeneraltradingcoltd-aeb54.appspot.com",
  messagingSenderId: "478207033044",
  appId: "1:478207033044:web:f82c8c11bf8cada78a4541",
  measurementId: "G-ZCWB20DFT4",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfiq)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };

export default db;
