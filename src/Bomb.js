// your Bomb code here!
import React from 'react'

class Bomb extends React.Component{
    constructor(props){
        super();
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    timerRender(){
        if(this.state.secondsLeft > 0){
            return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        }else{
            return <p>Boom!</p>
        }
    }

    render(){
        return(
            <div>{this.timerRender()}</div>
        )
    }
}

export default Bomb