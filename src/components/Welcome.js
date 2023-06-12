import React, {Component} from "react";

class Welcome extends Component{        
    render(){
        const {name, playerName} = this.props
        return (
            <h1>Bem vindo {name}, {playerName}</h1>
        )
    }
}

export default Welcome; 