import {applyMiddleware, combineReducers, createStore} from "redux";
import {contentPageReducer} from "./content-reducer";
import {cardsReducer} from "./cards-reducer";
import thunk from "redux-thunk";

/**
 * Собираем все редьюсеры (обработчики) в один объект
 */
let reducers = combineReducers({
    contentPage : contentPageReducer,
    cardsPage: cardsReducer
});

/**
 * Создание store
 * applyMiddleware для подключения thunk
 */
let store = createStore(reducers, applyMiddleware(thunk));

export default store;