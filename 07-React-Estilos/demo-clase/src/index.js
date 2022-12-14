import React from 'react';
import ReactDOM from 'react-dom/client';
// normalizo p/q' en todos los browsers se vea igual npm install normalize.css
import 'normalize.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// para buscar en que diseños inspirarse pinterest, dribble, unsplash para imagenes

// para trabajar con otra libreria npm i styled-components, en componets Avatar.jsx
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
