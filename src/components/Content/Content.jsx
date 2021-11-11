import React from "react";
import s from "./Content.module.css"
import NewsItem from "./NewsItem/NewsItem";
import {addNewActionCreator, updateTextActionCreator} from "../../redux/state";

const Content = (props) => {
    let newsElement = React.createRef();

    let addNew = () => {
        props.dispatch(addNewActionCreator());
    }

    let onPostChange = () => {
        let text = newsElement.current.value;
        props.dispatch(updateTextActionCreator(text));
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