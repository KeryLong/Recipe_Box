import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDVqJ4wCIcDok5g4F3H5PJ9rbVvI7mCUDY",
  authDomain: "ppmapp-415b7.firebaseapp.com",
  projectId: "ppmapp-415b7",
  storageBucket: "ppmapp-415b7.appspot.com",
  messagingSenderId: "1064200859421",
  appId: "1:1064200859421:web:08aae1615370c1f406fbf4",
  measurementId: "G-XPXJDR3XFL"
};
  
// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }