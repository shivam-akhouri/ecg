// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore }  = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG6lflj_XIcSgQjwLcoCupWZR1yQQz-00",
  authDomain: "ecgbrainwave.firebaseapp.com",
  projectId: "ecgbrainwave",
  storageBucket: "ecgbrainwave.appspot.com",
  messagingSenderId: "766401962769",
  appId: "1:766401962769:web:8252f7a58059a8b80662b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

module.exports= { app, database}
