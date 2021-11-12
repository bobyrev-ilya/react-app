import React from "react";
import Content from "./Content";
import {addNewActionCreator, updateTextActionCreator} from "../../redux/content-reducer";
import {connect} from "react-redux";

/**
 * Контеерная компонента
 * @description
 * Создаем контейнер с помощью connect(), передавая props через возвращаемые объекты mapStateToProps и dispatch через mapDispatchToProps
 * Второй вызов "()" требуется для опеределения к какой презентационной компоненте принадлежит контейнер
 *
 * @method connect вызывает локальный subscribe
 * Страница перерисовывается только в случае изменения ссылки на объект
 */


const mapStateToProps = (state) => {
    return {
        newText: state.contentPage.newText,
        news: state.contentPage.news
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNew: () => {
            dispatch(addNewActionCreator());
        },
        updateNew: (text) => {
            dispatch(updateTextActionCreator(text));
        }
    }
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer