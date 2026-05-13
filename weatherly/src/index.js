import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/weather.css';
import Weather from './components/weather';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>
);