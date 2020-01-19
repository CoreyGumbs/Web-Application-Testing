import React from 'react';


const Display = ({strikes, balls, fouls}) => {
    return(
        <div>
            Display
            <p>Strike: {strikes}</p>
            <p>Balls: {balls}</p>
            <p>Fouls: {fouls}</p>
        </div>
    )
}

export default Display;