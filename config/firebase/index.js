// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore }  = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log(process.env.APIKEY)

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGEID,
  appId: process.env.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

module.exports= { app, database}
