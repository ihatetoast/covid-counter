import React from 'react'
import ButtonItem from './ButtonItem'
const ButtonList =(props)=> {
    return (
        <ul className="buttons-list">
           {props.cooties.map((cootie, id)=>(
               <ButtonItem key={cootie.id} id={cootie.id} >
                   <button val={cootie.cootieVal} effect ={cootie.effect} onClick={()=>alert(cootie.cootieVal)}>{cootie.behaviour}</button>
               </ButtonItem>
           ))}
        </ul>
    )
}
export default ButtonList;