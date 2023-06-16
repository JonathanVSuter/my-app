import React from "react";
import Person from "./Person";

function NameList(){
    const persons =[{
        id:1,
        name:'bruce',
        age:29,
        skill: 'angular'
    },
    {
        id:2,
        name:'clark',
        age:28,
        skill: 'angular'
    },
    {
        id:3,
        name:'diana',
        age:23,
        skill: 'C#'
    },]
    
    const personList = persons.map(person => <Person person={person}></Person>)
    return (
    <div>
        {
            personList
        }
    </div>)
}

export default NameList;