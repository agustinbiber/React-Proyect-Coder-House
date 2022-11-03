import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './screens/Home/Router';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA74z7ONfmRn7F9zkFOZ8C9ooW9Sk093d8",

  authDomain: "proyectoreact-coderhouse-ea9e7.firebaseapp.com",

  projectId: "proyectoreact-coderhouse-ea9e7",

  storageBucket: "proyectoreact-coderhouse-ea9e7.appspot.com",

  messagingSenderId: "475807536637",

  appId: "1:475807536637:web:a41fbe11ce0b36744ff594"

};


// Initialize Firebase

//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
