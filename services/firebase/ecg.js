const { doc, setDoc } = require("firebase/firestore");
const firestore = require("firebase/firestore")
const { database } = require("../../config/firebase");
const ECG = require("../../models/ecg");

function createEcgData(lowAlpha, highAlpha, lowBeta, highBeta,
lowGamma, midGamma, theta, delta) {
  const ecg = new ECG(firestore.Timestamp.now(), lowAlpha, highAlpha, lowBeta,
  highBeta, lowGamma, midGamma, theta, delta);
  const docRef = doc(database, 'ecg', new Date().getTime().toString());
  setDoc(docRef, ecg.toMap());
}


module.exports = createEcgData