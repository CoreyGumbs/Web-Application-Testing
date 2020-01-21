import React from 'react';

const ActionBtn = ({name, action, handleAction}) => {
    return(
        <div className="action-btn-container" data-testid="actionbtn-container">
            <button name={name} className="action-btn" onClick={handleAction} data-testid="actionBtn">
                {action}
            </button>
        </div>
    )
}

export default ActionBtn;