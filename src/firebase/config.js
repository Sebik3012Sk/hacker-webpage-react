import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBOjgOWOy09sSosJIAXD-MTKT7G9sB7gVI",
    authDomain: "hackers-webpage.firebaseapp.com",
    projectId: "hackers-webpage",
    storageBucket: "hackers-webpage.appspot.com",
    messagingSenderId: "451185070731",
    appId: "1:451185070731:web:ff1b64cb6e3a898b093a8e",
    measurementId: "G-VPEHVC7CZK"
};


firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();

export { projectFirestore };