import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state"
import ReactDOM from "react-dom";
import App from "./App";

export let rendererEntire = () => {
    ReactDOM.render(
        <App
            state={store.getState()}
            addNews={store.addNews.bind(store)}  //методы жестко связаны с контекстом (this) store
            updateText={store.updateText.bind(store)}
        />,
        document.getElementById('root')
    );
}

rendererEntire(store.getState());

store.subscribe(rendererEntire);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
