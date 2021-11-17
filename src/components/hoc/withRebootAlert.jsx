import React from "react";
import {connect} from "react-redux";

/**
 * HOC (high order component) для универсального добавления блока о перезагрузке
 * @param Component
 * @return {function(*)}
 */
export const withRebootAlert = (Component) => {
    let RebootAlertWrapper = (props) => {
        return <>
            <div>{props.alertText}</div>
            <Component {...props}/>
        </>
    }

    let mapStateToPropsAlertBlock = (state) => {
        return {
            alertText: state.contentPage.alertText
        }
    }

    return connect(mapStateToPropsAlertBlock)(RebootAlertWrapper);
}