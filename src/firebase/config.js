import * as firebase from 'firebase/app'
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBbJlfeHhYmXDR_eYRGhRXbZXFp3thp6Ic",
    authDomain: "olx-clone-734ec.firebaseapp.com",
    projectId: "olx-clone-734ec",
    storageBucket: "olx-clone-734ec.appspot.com",
    messagingSenderId: "713584389241",
    appId: "1:713584389241:web:2c1c94e97a661d8b9f78a8",
    measurementId: "G-BJDF9FPCEK"
  };

export default firebase.initializeApp(firebaseConfig)