import React from 'react'

const Score=(props) =>{
    return (
        <div>
            <h2>On {props.date.toLocaleTimeString()}, the viral load around you is {props.cooties}</h2>
        </div>
    )
}
export default Score;