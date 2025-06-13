import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/Banner';
import './app.css'; // Kita akan buat tailwind disini

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Banner />
  </React.StrictMode>
);
