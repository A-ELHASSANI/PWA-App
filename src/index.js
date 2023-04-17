import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from "./serviceWorker";
import 'flowbite';
const root = ReactDOM.createRoot(document.getElementById('root'));

 const _URL_ ="https://www.dbs-crm.com/artus-site/apiLoginCollab/";
//const _URL_ ="http://localhost/api/";
 let _TestLogin_ = localStorage.getItem('token');
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </React.StrictMode>
);

export { _URL_ } 
export { _TestLogin_ } 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
registerServiceWorker();