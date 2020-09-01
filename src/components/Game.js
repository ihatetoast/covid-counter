import React, { Component } from 'react'
import Button from './ButtonItem'
import Score from './Score'
import ButtonList from './ButtonList'
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
      getMonthName=(num)=>{
        const months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octber", "November", "December"];
        return months[num]
    }
   
    render() {
        const cootieData=[
            { 
                id:190,
                behaviour: 'meeting friends in person',
                cootieVal:2,
                effect: 'bad'
            },
            {
                id:191,
                behaviour: 'coughing into your hands',
                cootieVal:3,
                effect: 'bad'
            },
            {
                id:192,
                behaviour: 'going maskless in public',
                cootieVal:5,
                effect: 'bad'
            },
            {
                id:193,
                behaviour: 'touching all the things',
                cootieVal:4,
                effect: 'bad'
            },
            {
                id:194,
                behaviour: 'staying at home',
                cootieVal:6,
                effect: 'good'
            },
            {
                id:195,
                behaviour: 'washing hands > 20sec',
                cootieVal:3,
                effect: 'good'
            },
            {
                id:196,
                behaviour: 'keeping 6ft/2m away from others',
                cootieVal:4,
                effect: 'good'
            },       
            {
                id:197,
                behaviour: 'ignoring epidemiologists and infectious disease experts',
                cootieVal:5,
                effect: 'bad'
            },
            {
                id:198,
                behaviour: 'getting advice from cousin Dave\'s YouTube channel',
                cootieVal:3,
                effect: 'bad'
            },
            {
                id:199,
                behaviour: 'choosing to-go or food delivery services instead of dining out',
                cootieVal:2,
                effect: 'good'
            }
        ]
        const thisDate = new Date();
        const monthName = this.getMonthName(thisDate.getMonth())
        return (
            <div style={{background: '#999'}}>
                <p>On {thisDate.getDate()} {monthName} {thisDate.getFullYear()} at {thisDate.toLocaleTimeString()}, you've woken up from a coma into the middle of a global pandemic. Your room is sterile, but outside is a bloody mess with a new set of rules to keep you safe. Your behaviour affects the viral load around you.</p>
               <Score cooties={this.state.cooties} />
               <ButtonList cooties={cootieData} handleClick={this.handleClick.bind(this)}/>
                
                
            </div>
        )
    }
}
export default Game