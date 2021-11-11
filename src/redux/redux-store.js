import {combineReducers, createStore} from "redux";
import {contentPageReducer} from "./content-reducer";

let reducers = combineReducers({
    contentPage : contentPageReducer
});

let store = createStore(reducers);

export default store;