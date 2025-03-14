import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import TodoApp from './Todo';
import reportWebVitals from './reportWebVitals';
// import Counter from './Counter';
import Counter from './components/Usestate';
// import mon from './mongo';
import App from './useContext'
import Timer from './components/Useeffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Timer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
