import React from "react";
const Greet = props =>{
    const {name, playerName} = props
    return (
    <div>
       <h1>God bye {name} and {playerName}!</h1>        
    </div>
    )        
}
export default Greet;