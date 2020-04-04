import React, { Component } from 'react'
import Button from './Button'
import Score from './Score'

//cootie count never below 1 because there's never a time when there are no cooties.
 class Game extends Component {
     state={
         cooties: 1,
    
     }
     //contrived fcn to convert cooties in the wild to cases. 
     convertCootiesToCases=(val)=>{
        return val < 100 ? 1 : val/100;
     }
     updateCootieData =()=>{
        this.convertCootiesToCases(this.cooties)
     }
     handleClick=(val, eff)=>{
        if(eff==='bad'){
            this.setState((prevState) => ({ 
                cooties: prevState.cooties * val 
            }));
        }
        if(eff==='good'){
            //shouldn't happen if using div of pos #
            if(this.state.cooties <=0){
                return;
            }
            this.setState((prevState) => ({ 
                //ceil so cooties is never 0, mult * 0 will ret 0
                cooties: Math.ceil(prevState.cooties / val) 
            }));
        }
     }
     componentDidUpdate(prevState) {
        if (this.state.cooties !== prevState.cooties) {
            console.log('cootiesssss');
        }
      }
    render() {
        
        return (
            <div style={{background: '#999'}}>
               <h2>I am the game div</h2>
               <Score cooties={this.state.cooties} date={new Date()}/>
                <Button cootieVal={2} effect={'bad'} clicked={this.handleClick.bind(this)}>meeting friends in person</Button>
                <Button cootieVal={3} effect={'bad'} clicked={this.handleClick.bind(this)}>coughing into your hands</Button>
                <Button cootieVal={4} effect={'bad'} clicked={this.handleClick.bind(this)}>touching all the things</Button>
                <Button cootieVal={4} effect={'good'} clicked={this.handleClick.bind(this)}>staying at home</Button>
                <Button cootieVal={3} effect={'good'} clicked={this.handleClick.bind(this)}>washing hands > 20sec</Button>
                <Button cootieVal={2} effect={'good'} clicked={this.handleClick.bind(this)}>keeping 6ft/2m away</Button>
                
            </div>
        )
    }
}
export default Game