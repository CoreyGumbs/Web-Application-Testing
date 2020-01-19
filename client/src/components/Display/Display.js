import React from 'react';


const Display = ({strikes, balls, fouls, outs}) => {
    return(
        <div className="display-container">
            Display
            <p className="display-content">Strike: {strikes}</p>
            <p className="display-content">Balls: {balls}</p>
            <p className="display-content">Fouls: {fouls}</p>
            <p className="display-content">Outs: {outs}</p>
        </div>
    )
}

export default Display;