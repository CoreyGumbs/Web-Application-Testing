import React from 'react';

import ActionBtn from './ActionBtn';

const DashBoard = ({handleAction}) => {
    return(
        <div>
            Hello
            <ActionBtn name={'strikes'} action={'strike'} handleAction={handleAction}/>
            <ActionBtn name={'balls'} action={'balls'} handleAction={handleAction}/>
            <ActionBtn name={'fouls'} action={'fouls'} handleAction={handleAction}/>
        </div>
    )
}

export default DashBoard;