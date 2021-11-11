import React from "react";
import {addNewActionCreator, updateTextActionCreator} from "../../redux/content-reducer";
import Content from "./Content";

//Контеерная компонента

const ContentContainer = (props) => {

    let state = props.store.getState();

    let addNew = () => {
        props.store.dispatch(addNewActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateTextActionCreator(text));
    }

    return (
        <Content
            updateNew={onPostChange}
            createNew={addNew}
            newText={state.contentPage.newText}
            news={state.contentPage.news}
        />
    );
}

export default ContentContainer