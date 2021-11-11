import {rendererEntire} from "../render";

let state = {
    contentPage: {
        news: [
            {id: 1, title: "11 oct"},
            {id: 2, title: "12 oct"}
        ],
        comments: [
            {id: 1, desc: "comm 1"},
            {id: 2, desc: "comm 2"}
        ]
    }
}

export let addNews = (text) => {
    let currentNews = state.contentPage.news;
    state.contentPage.news.push({
            id: currentNews[currentNews.length - 1].id,
            title: text == "" ? "- No title -" : text
    }
    );
    rendererEntire(state);
}

export default state;