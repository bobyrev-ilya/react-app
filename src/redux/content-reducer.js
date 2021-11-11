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

export const contentPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS: {
            debugger
            let currentNews = state.news;
            currentNews.push({
                    id: currentNews[currentNews.length - 1].id + 1,
                    title: state.newText === "" ? "- No title -" : state.newText
                }
            );
            state.newText = '';
            return state;
        }
        case UPDATE_TEXT: {
            state.newText = action.text;
            return state;
        }
        default:
            return state;
    }
};

export const addNewActionCreator = () => ({type: ADD_NEWS})

export const updateTextActionCreator = (text) =>
    ({type: UPDATE_TEXT, text: text})