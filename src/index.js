import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let news = [
    {id: 1, title: "11 oct"},
    {id: 2, title: "12 oct"}
]

let comments = [
    {id: 1, desc: "comm 1"},
    {id: 2, desc: "comm 2"}
]

ReactDOM.render(
  <React.StrictMode>
    <App news={news} comments={comments}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
