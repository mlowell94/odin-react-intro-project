import React, { Component } from 'react'
import Attribute from './Attribute'

export class Description extends Component {
    constructor() {
        super()

        this.state = {
            keys: []
        }
    }
  render() {
    let output = 
    this.props.description.map
        ((element, index) => 
            <li key = {element}>
                <Attribute 
                    pattern = {/^(?!\s*$).+/} 
                    errorHandler = { this.props.errorHandler } 
                    errorText = {'This error message should never dispaly'} 
                    class = {'description'} 
                    placeholder = {element}
                    modifyEntry = {this.props.modifyEntry}
                    attributeName = 'description'
                    index = {this.props.index}
                    descIndex = {index}
                />
                <button onClick = {() => this.props.removeDescription(this.props.index, index)}>del</button>
            </li>)
    return (
        <div>
            <ul>{output}</ul>
            <button onClick = {() => {this.props.addDescription(this.props.index)}}>Add Description</button>
        </div>

    )
  }
}

export default Description