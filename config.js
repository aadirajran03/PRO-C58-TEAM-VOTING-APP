import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyButWNWheOuPzj1fb-qdCGbUP8Pz6ykutg",
  authDomain: "teamvoitingapp-f1b25.firebaseapp.com",
  databaseURL: "https://teamvoitingapp-f1b25-default-rtdb.firebaseio.com",
  projectId: "teamvoitingapp-f1b25",
  storageBucket: "teamvoitingapp-f1b25.appspot.com",
  messagingSenderId: "1019355660505",
  appId: "1:1019355660505:web:48d3c99076a268c723fec8",
  measurementId: "G-26FRBETBP6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
