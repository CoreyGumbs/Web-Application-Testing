import React from 'react';

import ActionBtn from './ActionBtn';

const DashBoard = ({handleAction}) => {
    return(
        <div>
            Hello
            <ActionBtn name={'strikes'} action={'strike'} handleAction={handleAction}/>
        </div>
    )
}

export default DashBoard;