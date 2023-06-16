import React from "react";

function Person({person, key}){
    return (<div>
        <hidden>{key}</hidden>
        <h2>
           {person.id} {person.name} {person.age}{person.skill}
        </h2>
    </div>)
}
export default Person;