import {combineReducers, createStore} from "redux";
import {contentPageReducer} from "./content-reducer";

/**
 * Собираем все редьюсеры (обработчики) в один объект
 */
let reducers = combineReducers({
    contentPage : contentPageReducer
});

/**
 * Создаем store
 */

let store = createStore(reducers);

export default store;