import {contentPageReducer} from "./content-reducer";

let store = {
    _state: {
        contentPage: {
            news: [
                {id: 1, title: "11 oct"},
                {id: 2, title: "12 oct"}
            ],
            comments: [
                {id: 1, desc: "comm 1"},
                {id: 2, desc: "comm 2"}
            ],
            newText: 'sds'
        }
    },
    _callsubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callsubscriber = observer; // паттерн observer (наблюдатель)
    },

    dispatch(action) {  // единственный интерфейс изменения state
        this._state.contentPage = contentPageReducer(this._state.contentPage, action);

        this._callsubscriber();
    }

}

export default store;

window.store = store