import React from 'react';

const Person = (props)=>{
    return(
        <div>
            <h1>I am {props.name}! Age: {props.age}</h1>
            <h4>{props.children}</h4>
        </div>
    )
}
export default Person;