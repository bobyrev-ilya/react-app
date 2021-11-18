import React, {useEffect, useState} from "react";

let Status_function = (props) => {
    /**
     * useState = локальный state в Reacte
     */
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);


    /**
     * hook вызывается при изменении параметра в []
     */
    useEffect(() => {
        alert("Режим изменения статуса");
    },[status]);

    const activateEditMode = () => {
        setEditMode(true);
    }


    const deactivateEditMode = () => {
        setEditMode(false);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return  (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={ activateEditMode }>{status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={ onStatusChange } autoFocus={true} onBlur={ deactivateEditMode } value={status}/>
                </div>
            }
        </div>
    )
}

export default Status_function;