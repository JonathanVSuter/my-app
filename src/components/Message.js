import React, {Component} from "react";

class Message extends Component{
    constructor(){
        super();
        this.state = {
            message: 'Pára de olhar pra minha tela amor.'
        };
    }
    changeMessage(){
        this.setState({
            message:'Parou.'
        });
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Mudar mensagem.</button>
            </div>

            )
    }
}

export default Message; 