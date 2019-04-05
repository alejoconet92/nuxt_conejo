import firebase, {firestore} from 'firebase'
var config = {
  apiKey: "AIzaSyBzZCmHdSZG-X8lQUAqd6E7Xy7pTnHmUwA",
  authDomain: "solucioneswifi-d4b08.firebaseapp.com",
  databaseURL: "https://solucioneswifi-d4b08.firebaseio.com",
  projectId: "solucioneswifi-d4b08",
  storageBucket: "solucioneswifi-d4b08.appspot.com",
  messagingSenderId: "196156285197"
};

  if(!firebase.apps.length){
    firebase.initializeApp(config);
  }

  const db = firebase.firestore()

  export default firebase 
  export{
      db
  }
  