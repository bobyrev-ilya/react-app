const ADD_NEWS = 'ADD_NEWS';
const UPDATE_TEXT = 'UPDATE_TEXT';

export const addNewActionCreator = () => ({type: ADD_NEWS})

export const updateTextActionCreator = (text) =>
    ({type: UPDATE_TEXT, text: text})


export const contentPageReducer = (state, action) => {
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
    }
};