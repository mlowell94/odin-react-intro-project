import React, { Component } from 'react'
import Attribute from './Attribute'

export class Entry extends Component {
  render() {
    return (
      <div>
        <div className='top-row'>
            <Attribute 
            pattern = {/^(?!\s*$).+/} 
            errorHandler = { this.props.errorHandler } 
            errorText = {'Please enter a degree name. Degree names are defined as anything that is not a white space.'} 
            class = {'experience'} 
            placeholder = {this.props.experience}
            modifyEntry = {this.props.modifyEntry}
            attributeName = 'experience'
            index = {this.props.index}
            />
            <div>
              <Attribute 
              pattern = {/((\b\d{1,2}\D{0,3})?\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|(Nov|Dec)(?:ember)?)\D?)(\d{1,2}(st|nd|rd|th)?)?((\s*[,.\-\/]\s*)\D?)?\s*((19[0-9]\d|20\d{2})|\d{2})*/} 
              errorHandler = { this.props.errorHandler } 
              errorText = {'Please enter the date the on which you begin studying at this location (formatted "month name - year")'} 
              class = {'start'} 
              placeholder = {this.props.start}
              modifyEntry = {this.props.modifyEntry}
              attributeName = 'start'
              index = {this.props.index}
              />
              <span>-</span>
              <Attribute 
              pattern = {/((\b\d{1,2}\D{0,3})?\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|(Nov|Dec)(?:ember)?)\D?)(\d{1,2}(st|nd|rd|th)?)?((\s*[,.\-\/]\s*)\D?)?\s*((19[0-9]\d|20\d{2})|\d{2})*/} 
              errorHandler = { this.props.errorHandler } 
              errorText = {'Please enter the date the on which you finished studying at this location (formatted "month name - year")'} 
              class = {'end'} 
              placeholder = {this.props.end}
              modifyEntry = {this.props.modifyEntry}
              attributeName = 'end'
              index = {this.props.index}
              />
            </div>
        </div>
        <div className='bottom-row'>
            <Attribute 
              pattern = {/^(?!\s*$).+/} 
              errorHandler = { this.props.errorHandler } 
              errorText = {'Please enter an institution name. Degree names are defined as anything that is not a blank space.'} 
              class = {'institution'} 
              placeholder = {this.props.name}
              modifyEntry = {this.props.modifyEntry}
              attributeName = 'name'
              index = {this.props.index}
            />
            <Attribute
            pattern = {/^(?!\s*$).+/} 
            errorHandler = { this.props.errorHandler } 
            errorText = {'Please enter a location name'} 
            class = {'location'} 
            placeholder = {this.props.location}
            modifyEntry = {this.props.modifyEntry}
            attributeName = 'location'
            index = {this.props.index}
            />
        </div>
      </div>
    )
  }
}

export default Entry