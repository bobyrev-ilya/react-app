const ADD_NEWS = 'ADD_NEWS';
const UPDATE_TEXT = 'UPDATE_TEXT';


let initialState = {
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

/**
 *
 * Создание редьюссера для обработки state/contentPage
 * Редьюссер всегда принимает state и action, обязательно возвращает state (чистые функции не должны менять первоначальный объект)
 */

export const contentPageReducer = (state = initialState, action) => {

    debugger
    /**
     * Делаю копию необходимой части state, т.к. обновление UI вызывается только при изменении сслыки на объект в props
     */

    switch (action.type) {
        case ADD_NEWS: {
            let stateCopy = {...state};
            stateCopy.news = [...state.news];
            let news = stateCopy.news;
            news.push({
                    id: news[news.length - 1].id + 1,
                    title: stateCopy.newText === "" ? "- No title -" : stateCopy.newText
                }
            );
            stateCopy.newText = '';
            return stateCopy;
        }
        case UPDATE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newText = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
};

/**
 * Функции для создания корректных действий для редьюссеров
 */

export const addNewActionCreator = () => ({type: ADD_NEWS})

export const updateTextActionCreator = (text) =>
    ({type: UPDATE_TEXT, text: text})