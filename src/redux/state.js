let rendererEntire;

let state = {
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
}

export const addNews = () => {
    let currentNews = state.contentPage.news;
    state.contentPage.news.push({
            id: currentNews[currentNews.length - 1].id + 1,
            title: state.contentPage.newText == "" ? "- No title -" : state.contentPage.newText
        }
    );
    updateText('')
    rendererEntire();
}

export const updateText = (text) => {
    state.contentPage.newText = text;
    rendererEntire();
}

export const subscribe = (observer) =>{
    rendererEntire = observer; // паттерн observer (наблюдатель)
}

export default state;