import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyC1vbGpSU6c0stsVqz6PtGIpRzjJWRDStg",
  authDomain: "activity-decider.firebaseapp.com",
  projectId: "activity-decider",
  storageBucket: "activity-decider.appspot.com",
  messagingSenderId: "251681898258",
  appId: "1:251681898258:web:145b17fe761f052592fdcb"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();