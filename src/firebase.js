import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDcREJvcSr6c4_oht5Hc6EAbkUAc-34LFU",
  authDomain: "reactblog-c50e4.firebaseapp.com",
  databaseURL: "https://reactblog-c50e4.firebaseio.com",
  projectId: "reactblog-c50e4",
  storageBucket: "reactblog-c50e4.appspot.com",
  messagingSenderId: "576859827016"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/posts');
