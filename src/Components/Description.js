import React from "react";
import Attribute from "./Attribute";


const Description = (props) => {
    let output = 
    props.description.map
        ((element, index) => 
            <li key={element}>
                <Attribute
                    pattern = {/^(?!\s*$).+/} 
                    errorHandler = { props.errorHandler } 
                    errorText = {'This error message should never dispaly'} 
                    class = {'description'} 
                    placeholder = {element}
                    modifyEntry = {props.modifyEntry}
                    attributeName = 'description'
                    index = {props.index}
                    descIndex = {index}
                />
                <button onClick = {() => props.removeDescription(props.index, index)}>del</button>
            </li>)
    return (
        <div>
            <ul>{output}</ul>
            <button onClick = {() => {props.addDescription(props.index)}}>Add Description</button>
        </div>

    )
}

export default Description