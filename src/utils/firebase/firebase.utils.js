// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr6LbonoxLW1PCaB7lT6vXz972rdAsIG4",
  authDomain: "crwn-clothing-db-c51fa.firebaseapp.com",
  projectId: "crwn-clothing-db-c51fa",
  storageBucket: "crwn-clothing-db-c51fa.appspot.com",
  messagingSenderId: "546835692979",
  appId: "1:546835692979:web:9fa9e0f53e7e54c40a5fc6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.getCustomParameters({
    prompt:"select_account",
    

});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth,additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users' ,userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const cereatedAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                cereatedAt,
                ...additionalInformation
            });
        }catch(error) {
            console.log('eror creating the user',error.message);
        }

    return userDocRef;

    }

    // if user data does'nt exist

    // if user data exists


    // return userRefDoc

    
}
export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password)

}
