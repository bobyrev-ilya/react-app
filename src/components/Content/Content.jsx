import React from "react";
import s from "./Content.module.css"
import NewsItem from "./NewsItem/NewsItem";
import Comment from "./Comment/Comment";


const Content = (props) => {
    return (

        <div className={s.content}>
            <div className={s.news}>
                {props.news.map(item => (<NewsItem id={item.id} title={item.title}/>))}
            </div>
            <div className={s.comment}>
                {props.comments.map(c => (<Comment desc={c.desc}/>))}
            </div>
        </div>
    );
}

export default Content