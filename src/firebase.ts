import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBdR7oAw5Bu04ysZeXDCpON7B4H35QAFyc",
  authDomain: "fir-1-9a667.firebaseapp.com",
  projectId: "fir-1-9a667",
  storageBucket: "fir-1-9a667.appspot.com",
  messagingSenderId: "311116427913",
  appId: "1:311116427913:web:90daf9e7f592d7f8294c58",
  measurementId: "G-T4G44J9VJ6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
