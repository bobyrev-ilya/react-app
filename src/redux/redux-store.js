import {combineReducers, createStore} from "redux";
import {contentPageReducer} from "./content-reducer";
import {cardsReducer} from "./cards-reducer";

/**
 * Собираем все редьюсеры (обработчики) в один объект
 */
let reducers = combineReducers({
    contentPage : contentPageReducer,
    cardsPage: cardsReducer
});

/**
 * Создаем store
 */

let store = createStore(reducers);

export default store;