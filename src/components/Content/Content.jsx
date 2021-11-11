import React from "react";
import s from "./Content.module.css"
import NewsItem from "./NewsItem/NewsItem";
import Comment from "./Comment/Comment";

let news = [
    {id: 1, title: "11 oct"},
    {id: 2, title: "12 oct"}
]

let comments = [
    {id: 1, desc: "comm 1"},
    {id: 2, desc: "comm 2"}
]

const Content = () => {
    return (

        <div className={s.content}>
            <div className={s.news}>
                {news.map(item => (<NewsItem id={item.id} title={item.title}/>))}
            </div>
            <div className={s.comment}>
                {comments.map(c => (<Comment desc={c.desc}/>))}
            </div>
        </div>
    );
}

export default Content