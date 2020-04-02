import React from 'react'

const Button=(props)=> {
    console.log(props);
    return (
        <button onClick={()=>{
            props.habit==='good' ? props.clicked(1) : props.clicked(-1)
        }}>
         {props.children}   
        </button>
    )
}
export default Button