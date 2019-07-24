import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDPvaHAV9-uJrLb2E62lRN1Av2HqeeKFus",
    authDomain: "clothing-shop-db.firebaseapp.com",
    databaseURL: "https://clothing-shop-db.firebaseio.com",
    projectId: "clothing-shop-db",
    storageBucket: "",
    messagingSenderId: "241999546923",
    appId: "1:241999546923:web:cba3fbfb679041b8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;