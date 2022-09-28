import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/index';
import Efecto from './Efecto';
import './styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Efecto />
  </React.StrictMode>
);

// ReactDOM.createPortal(<Modal />, document.getElementById('modal'))