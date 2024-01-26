import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/Store';
import { BrowserRouter, HashRouter } from "react-router-dom";
import {Provider} from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //BrowserRouter not working when we deployed to techpact server so replaced with HashRouter
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);


reportWebVitals();
