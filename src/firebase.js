import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDnshkY_5-DPEtksrbsX7AEo135ErVCxKQ",
    authDomain: "crypto-news-6bfd3.firebaseapp.com",
    databaseURL: "https://crypto-news-6bfd3.firebaseio.com",
    projectId: "crypto-news-6bfd3",
    storageBucket: "crypto-news-6bfd3.appspot.com",
    messagingSenderId: "340409102156",
    appId: "1:340409102156:web:adda14c5673b43cdd269e9",
    measurementId: "G-7WD8R5HNMF"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;