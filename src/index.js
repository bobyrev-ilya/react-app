import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addNews, subscribe, updateText} from "./redux/state"
import ReactDOM from "react-dom";
import App from "./App";

export let rendererEntire = () => {
    ReactDOM.render(
        <App
            state={state}
            addNews={addNews}
            updateText={updateText}
        />, document.getElementById('root')
    );
}

rendererEntire(state);

subscribe(rendererEntire);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
