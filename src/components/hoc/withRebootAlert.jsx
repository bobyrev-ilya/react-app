import React from "react";

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

    return RebootAlertWrapper;
}