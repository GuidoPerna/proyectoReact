import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CartContextProvider } from "./context/cartContext";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from "react-router-dom";
import { router } from './router/Index';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-CZ5t6iF7TjFQTwdb475F2pQgm-1U3Lk",
  authDomain: "computienda-coderhouse.firebaseapp.com",
  projectId: "computienda-coderhouse",
  storageBucket: "computienda-coderhouse.appspot.com",
  messagingSenderId: "366452331068",
  appId: "1:366452331068:web:0532119eaa10b5c664a939"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
