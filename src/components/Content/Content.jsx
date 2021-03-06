import React from "react";
import s from "./Content.module.css"
import NewsItem from "./NewsItem/NewsItem";
import Status_class from "./Status_class.jsx"
import Status_function from "./Status_function";

/**
 * Презентационная компонента (должна содержать только данные + callback'и)
 */
const Content = (props) => {

    let onAddNew = () => {
        props.createNew();
    }

    let onPostChange = (e) => {
        debugger
        let text = e.target.value;
        props.updateNew(text);
    }

    return (
        <>
            <div>
                <Status_function status={`Hello`}/>
            </div>
            <div className={s.content}>
                <div>
                    <h3>My news</h3>
                    <div>
                        <textarea onChange={onPostChange} value={props.newText}/>
                    </div>
                    <div>
                        <button onClick={onAddNew}>Add news</button>
                    </div>
                </div>
                <div className={s.news}>
                    {props.news.map(item => (<NewsItem id={item.id} title={item.title}/>))}
                </div>
            </div>
        </>
    );
}

export default Content