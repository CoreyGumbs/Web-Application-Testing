import React from 'react';

const ActionBtn = ({name, action, handleAction}) => {
    return(
        <div className="action-btn-container">
            <button name={name} className="action-btn" onClick={handleAction}>
                {action}
            </button>
        </div>
    )
}

export default ActionBtn;