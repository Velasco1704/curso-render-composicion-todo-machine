import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App/index';
import Efecto from './Efecto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Efecto />
  </React.StrictMode>
);
