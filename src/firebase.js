import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCHWTCGEPkFPphX2FME6J6paxw0Zt_j48g",
    authDomain: "emilios-market.firebaseapp.com",
    projectId: "emilios-market",
    storageBucket: "emilios-market.appspot.com",
    messagingSenderId: "572817426109",
    appId: "1:572817426109:web:8d5e621f06163dced819d4",
    measurementId: "G-NLKYWJ79BZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
