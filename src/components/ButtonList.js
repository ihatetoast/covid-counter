import React from 'react'
import ButtonItem from './ButtonItem'
import styles from '../styles/ButtonList.module.css';
const ButtonList =(props)=> {
    return (
        <ul className={styles.list}>
           {props.cooties.map((cootie, id)=>{

               return(
               
               <ButtonItem key={cootie.id}  >
                    <div>
                        <span>{cootie.behaviour}</span>
                        <button type="button" onClick={()=>props.handleClick(cootie.cootieVal, cootie.effect)}>X</button>
                    </div>
               </ButtonItem>
           )})}
        </ul>
    )
}
export default ButtonList;