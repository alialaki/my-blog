import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqkMlT0ji7F-F3F9cDNKV0bOSJkqojnAY",
  authDomain: "my-react-blog-c22e3.firebaseapp.com",
  projectId: "my-react-blog-c22e3",
  storageBucket: "my-react-blog-c22e3.appspot.com",
  messagingSenderId: "973687917508",
  appId: "1:973687917508:web:c5c0ac599a9b7aa8f4f291"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
