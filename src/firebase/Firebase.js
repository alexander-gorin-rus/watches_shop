import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBaE_yxye48bhMu3_QBRptGJtL3NHXyVnE",
    authDomain: "watches-shop-6f352.firebaseapp.com",
    projectId: "watches-shop-6f352",
    storageBucket: "watches-shop-6f352.appspot.com",
    messagingSenderId: "216133717902",
    appId: "1:216133717902:web:a69d7d4e84951e240cdedf",
    measurementId: "G-K8J24XLCJ2"
}

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShop = await userRef.get();

    //console.log(snapShop)

    if(!snapShop.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error)
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

export default firebase
