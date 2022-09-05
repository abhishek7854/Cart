import firebase from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyBvSsvNrxCUMIh4915weMAB6N1STRHImQ4",
  
    authDomain: "cart-56118.firebaseapp.com",
  
    projectId: "cart-56118",
  
    storageBucket: "cart-56118.appspot.com",
  
    messagingSenderId: "986390452571",
  
    appId: "1:986390452571:web:313e0512323191f659a27e"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db , auth};
  