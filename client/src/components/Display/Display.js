import React from 'react';


const Display = ({strikes, balls, fouls, outs, hit}) => {
    return(
        <div>
            Display
            <p>Strike: {strikes}</p>
            <p>Balls: {balls}</p>
            <p>Fouls: {fouls}</p>
            <p>Outs: {outs}</p>
            {hit && 
                <p>Player Got A Hit!!</p>}
        </div>
    )
}

export default Display;