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
    getState(){
        return this._state;
    },
    _callsubscriber() {
    },
    addNews(){
        let contentPage = this._state.contentPage;
        let currentNews = contentPage.news;
        currentNews.push({
                id: currentNews[currentNews.length - 1].id + 1,
                title: contentPage.newText == "" ? "- No title -" : contentPage.newText
            }
        );
        this.updateText('')
        this._callsubscriber();
    },
    updateText(text){
        this._state.contentPage.newText = text;
        this._callsubscriber();
    },
    subscribe(observer){
        this._callsubscriber = observer; // паттерн observer (наблюдатель)
    }
}

export default store;

window.store = store