import React, {Component} from "react";

class ClassClick extends Component{        
    clickHandler(){
        console.log('Clicou.');
    }
    render(){        
        return (
            <div>
                <button onClick={this.clickHandler}>Click em mim</button>
            </div>
        )
    }
}

export default ClassClick; 