import React from 'react';

import ActionBtn from './ActionBtn';

const DashBoard = ({handleAction}) => {
    return(
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <ActionBtn name={'strikes'} action={'strike'} handleAction={handleAction}/>
            <ActionBtn name={'balls'} action={'balls'} handleAction={handleAction}/>
            <ActionBtn name={'fouls'} action={'fouls'} handleAction={handleAction}/>
            <ActionBtn name={'hit'} action={'hit'} handleAction={handleAction}/>
        </div>
    )
}

export default DashBoard;