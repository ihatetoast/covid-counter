import React from 'react'
import ButtonItem from './ButtonItem'
import styles from '../styles/ButtonList.module.css';
import {ReactComponent as Mask} from './../images/mask.svg';
const ButtonList =(props)=> {
    return (
        <ul className={styles.list}>
           {props.cooties.map((cootie, id)=>{

               return(
               
               <ButtonItem key={cootie.id}  >
                    <div className="button-content">
                        <span>{cootie.behaviour}</span>
                        <div className="mask-wrapper">
                            <span className="mask-ties" id="tie-1"></span>
                            <button type="button" onClick={()=>props.handleClick(cootie.cootieVal, cootie.effect)}><Mask /></button>
                            <span className="mask-ties" id="tie-2"></span>
                        </div>
                    </div>
               </ButtonItem>
           )})}
        </ul>
    )
}
export default ButtonList;