import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyASlz-aJ5hsTIRDkgCYpVQGiUTU7RJZ4xU",
    authDomain: "covid-app-forum.firebaseapp.com",
    databaseURL: "https://covid-app-forum-default-rtdb.firebaseio.com",
    projectId: "covid-app-forum",
    storageBucket: "covid-app-forum.appspot.com",
    messagingSenderId: "881028770307",
    appId: "1:881028770307:web:ea3c27f125c4b3ad1bbc36",
    measurementId: "G-60Z3VQ7BSE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;