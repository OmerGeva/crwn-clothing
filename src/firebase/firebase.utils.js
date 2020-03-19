import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDj_i4mR1XdekpN3DE0sn1Knf6Y7-Oam44",
    authDomain: "crwn-clothing-bf5c7.firebaseapp.com",
    databaseURL: "https://crwn-clothing-bf5c7.firebaseio.com",
    projectId: "crwn-clothing-bf5c7",
    storageBucket: "crwn-clothing-bf5c7.appspot.com",
    messagingSenderId: "739725180933",
    appId: "1:739725180933:web:4b2cd8fa84579d577a1c6c",
    measurementId: "G-KE0LP5LZEV"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log("error creating user", error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
