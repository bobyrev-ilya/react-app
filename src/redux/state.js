let store ={
    _state : {
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

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callsubscriber = observer; // паттерн observer (наблюдатель)
    },

    dispatch(action){  // единственный интерфейс изменения state
        if(action.type === 'ADD_NEWS'){
            let contentPage = this._state.contentPage;
            let currentNews = contentPage.news;
            currentNews.push({
                    id: currentNews[currentNews.length - 1].id + 1,
                    title: contentPage.newText === "" ? "- No title -" : contentPage.newText
                }
            );
            this._state.contentPage.newText = '';
            this._callsubscriber();

        }
        else if(action.type === 'UPDATE_TEXT'){
            this._state.contentPage.newText = action.text;
            this._callsubscriber();
        }

    }

}

export default store;

window.store = store