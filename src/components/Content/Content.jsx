import React from "react";
import s from "./Content.module.css"
import NewsItem from "./NewsItem/NewsItem";

let newsElement = React.createRef();

const Content = (props) => {
    debugger
    let addNew = () => {
        props.dispatch({ type: 'ADD_NEWS' });
    }

    let onPostChange = () => {
        let text = newsElement.current.value;
        props.dispatch({ type: 'UPDATE_TEXT', text: text });
    }

    return (
        <div className={s.content}>
            <div>
                <h3>My news</h3>
                <div>
                    <textarea ref={newsElement} onChange={onPostChange} value={props.state.newText}/>
                </div>
                <div>
                    <button onClick={addNew}>Add news</button>
                </div>
            </div>
            <div className={s.news}>
                {props.state.news.map(item => (<NewsItem id={item.id} title={item.title}/>))}
                {/*<div className={s.comment}>*/}
                {/*    {props.state.comments.map(c => (<Comment desc={c.desc}/>))}*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Content