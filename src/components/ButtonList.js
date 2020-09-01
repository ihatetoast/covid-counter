import React from 'react'
import ButtonItem from './ButtonItem'
import styles from '../styles/ButtonList.module.css';
const ButtonList =(props)=> {
    return (
        <ul className={styles.list}>
           {props.cooties.map((cootie, id)=>(
               <ButtonItem key={cootie.id} id={cootie.id} >
                    <div>
                        <span>{cootie.behaviour}</span>
                        <button val={cootie.cootieVal} effect ={cootie.effect} onClick={()=>alert(cootie.cootieVal)} type="button">X</button>
                    </div>
               </ButtonItem>
           ))}
        </ul>
    )
}
export default ButtonList;