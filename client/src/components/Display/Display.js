import React from 'react';


const Display = ({strikes, balls, fouls, outs}) => {
    return(
        <div className="display-container">
            Player's At Bat
            <p className="display-content" data-testid="display-content">Strikes: {strikes}</p>
            <p className="display-content" data-testid="display-content">Balls: {balls}</p>
            <p className="display-content" data-testid="display-content">Fouls: {fouls}</p>
            <p className="display-content" data-testid="display-content">Outs: {outs}</p>
        </div>
    )
}

export default Display;