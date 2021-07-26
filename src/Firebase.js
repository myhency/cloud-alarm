import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB3o2gcYsWanPVnw4k041HhsVO80OplJms',
  authDomain: 'bread-stock.firebaseapp.com',
  databaseURL: 'https://bread-stock.firebaseio.com',
  projectId: 'bread-stock',
  storageBucket: 'bread-stock.appspot.com',
  messagingSenderId: '767847792643',
  appId: '1:767847792643:web:38e067c7cd2204022fce36',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig).database();
firebase.auth().setPersistence(
  firebase.auth.Auth.Persistence.LOCAL,
);

export default firebase;
