import firebase  from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBzZCmHdSZG-X8lQUAqd6E7Xy7pTnHmUwA",
    authDomain: "solucioneswifi-d4b08.firebaseapp.com",
    databaseURL: "https://solucioneswifi-d4b08.firebaseio.com",
    projectId: "solucioneswifi-d4b08",
    storageBucket: "solucioneswifi-d4b08.appspot.com",
    messagingSenderId: "196156285197"
  };

  firebase.initializeApp(config);
export default firebase