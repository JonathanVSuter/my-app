import React from "react";
function Greet(props){
    return (
    <div>
       <h1>God bye {props.name} and {props.playerName}!</h1>
        {props.children} 
    </div>
    )        
}
export default Greet;