import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6kLBCrS1po-eQiZFl-5gDWFbCSeTQbT8",
  authDomain: "python-tutorial-44b39.firebaseapp.com",
  databaseURL: "https://python-tutorial-44b39.firebaseio.com",
  projectId: "python-tutorial-44b39",
  storageBucket: "python-tutorial-44b39.appspot.com",
  messagingSenderId: "603689422938",
  appId: "1:603689422938:web:1c0c3b3c73ea4646604863",
  measurementId: "G-RHTFSZ97D3"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
