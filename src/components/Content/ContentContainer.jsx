import React from "react";
import Content from "./Content";
import {createNew, updateNew} from "../../redux/content-reducer";
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

const mapDispatchToProps = {
    createNew,
    updateNew
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer