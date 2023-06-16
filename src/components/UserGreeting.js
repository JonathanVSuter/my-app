import React, {Component} from "react";

export class UserGreeting extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn:false         
        }
        this.logar = this.logar.bind(this)
    }
    logar(){
        this.setState({
            isLoggedIn:true
        });
        alert('Logou!');
    }                
    render(){
        return this.state.isLoggedIn? (<div>Welcome John</div>) : (<div>Welcome guest<div><button onClick={this.logar}>Logar</button></div></div>)                         
    }   
}

export default UserGreeting; 