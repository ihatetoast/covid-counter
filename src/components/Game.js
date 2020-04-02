import React, { Component } from 'react'
import Button from './Button'
import Score from './Score'
 class Game extends Component {
     state={
         cooties: 0
     }
     handleClick=(val)=>{
        this.setState((prevState) => ({ cooties: prevState.cooties + val }));
     }
    render() {
        return (
            <div style={{background: '#999'}}>
               <h2>I am the game div</h2>
               <Score cooties={this.state.cooties}/>
                <Button habit={'bad'} clicked={this.handleClick.bind(this)}>bad thing</Button>
                <Button habit={'good'} clicked={this.handleClick.bind(this)}>good thing</Button>
            </div>
        )
    }
}
export default Game