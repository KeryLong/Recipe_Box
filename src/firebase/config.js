import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAU7lCXjoV0epjtm0UkSsyI8rk3PTmBN1U",
  authDomain: "recipebox-7c39d.firebaseapp.com",
  projectId: "recipebox-7c39d",
  storageBucket: "recipebox-7c39d.appspot.com",
  messagingSenderId: "462523959683",
  appId: "1:462523959683:web:d177c8a46c514ac37b4eb6",
  measurementId: "G-1KGXRSVZVZ"
};
  
// init firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }