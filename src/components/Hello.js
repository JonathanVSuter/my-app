import React from "react";

const Hello = () =>{
    // return (
    //     <div>
    //         <h1>Bye Ibra</h1>
    //     </div>
    // )
    return React.createElement('div',{id:'hello', class: 'dummyclass'},
                                React.createElement('h1', null, 'By Ibra')
    );
}

export default Hello;