import ReactDOM from "react-dom";
import App from "./App";
import {addNews} from "./redux/state";

export let rendererEntire = (state) => {
    ReactDOM.render(
        <App
            state={state}
            addNews={addNews}
        />, document.getElementById('root')
    );
}