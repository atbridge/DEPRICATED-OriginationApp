//@flow
import firebase from 'firebase';
import {config} from '../config/firebaseConfig'


firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider()
//firebase.auth().signInWithRedirect(provider) //redirect to where?  or is this all I have to do?

export default firebase;