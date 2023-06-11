import React, {Component} from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count:0
        };
    }
    increaseCounter(){
        this.setState((prevState)=>({
            count: prevState.count+1
        }));
    }
    incrementFive(){
        this.increaseCounter();
        this.increaseCounter();
        this.increaseCounter();
        this.increaseCounter();
        this.increaseCounter();
    }
    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=> this.increaseCounter()}>Incrementar</button>
                <button onClick={()=> this.incrementFive()}>Incrementar 5</button>
            </div>
            )
    }
}

export default Counter; 