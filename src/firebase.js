import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseAppConfig = {
    apiKey: "AIzaSyC7P-IoRfAQOMwo4ZshQJ4mSB2G2TSzM7g",
    authDomain: "my-money-a1475.firebaseapp.com",
    databaseURL: "https://my-money-a1475.firebaseio.com",
    projectId: "my-money-a1475",
    storageBucket: "my-money-a1475.appspot.com",
    messagingSenderId: "842736064120",
    appId: "1:842736064120:web:abfff1f9e521bf54bb3f8d",
    measurementId: "G-XY7FT6TCEE"
};

firebase.initializeApp(firebaseAppConfig);


export const provider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();

export default firebase;

