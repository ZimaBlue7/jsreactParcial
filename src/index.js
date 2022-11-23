import React from 'react';
import ReactDOM from 'react-dom';
import Primero from './Primero';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Primero numero='10'/>
  </React.StrictMode>
);