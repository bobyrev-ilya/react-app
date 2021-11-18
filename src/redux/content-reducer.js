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
    newText: 'sds',
    alertText: 'Через 15 минут будет перезагрузка сервера'
}

/**
 * Создание редьюссера для обработки state/contentPage (1 страница = 1 редьюссер)
 * Редьюссер всегда принимает state и action, обязательно возвращает state (чистые функции не должны менять первоначальный объект)
 */

export const contentPageReducer = (state = initialState, action) => {

    /**
     * Делаю копию необходимой части state в соответветвующем обработчике действия (обработчик должен иметь только копию того объекта, который планируется изменять)
     * т.к. обновление UI вызывается только при изменении сслыки на объект в props
     */
    let stateCopy;

    switch (action.type) {
        case ADD_NEWS: {

            let text = state.newText;

            /**
             * Изменяем новый текст + news и сразу возвращаем => соответствующая копия ниже
             */
            return {
                /**
                 * Поверхностно копируем state
                 */
                ...state,

                /**
                 * Апдейтим копию state новыми news и newText
                 */
                news: [...state.news,
                    {
                        id: state.news[state.news.length - 1].id + 1,
                        title: text === "" ? "- No title -" : text
                    }
                ],
                newText: ''
            };
        }
        case UPDATE_TEXT: {

            /**
             * Создаем копию и сразу изменяем текст
             */
            return {
                ...state,
                newText: action.text
            };

        }
        default:
            return state;
    }
};

/**
 * Функции для создания корректных действий для редьюссеров
 */

export const createNew = () => ({type: ADD_NEWS})

export const updateNew = (text) =>
    ({type: UPDATE_TEXT, text: text})