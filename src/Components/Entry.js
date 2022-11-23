import React from "react";
import Attribute from "./Attribute";

const Entry = (props) => {
    return (
        <div>
          <div className='top-row'>
              <Attribute 
              pattern = {/^(?!\s*$).+/} 
              errorHandler = {  props.errorHandler } 
              errorText = {'Please enter a degree name. Degree names are defined as anything that is not a white space.'} 
              class = {'experience'} 
              placeholder = { props.experience}
              modifyEntry = { props.modifyEntry}
              attributeName = 'experience'
              index = { props.index}
              />
              <div>
                <Attribute 
                pattern = {/((\b\d{1,2}\D{0,3})?\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|(Nov|Dec)(?:ember)?)\D?)(\d{1,2}(st|nd|rd|th)?)?((\s*[,.\-\/]\s*)\D?)?\s*((19[0-9]\d|20\d{2})|\d{2})*/} 
                errorHandler = {  props.errorHandler } 
                errorText = {'Please enter the date the on which you begin studying at this location (formatted "month name - year")'} 
                class = {'start'} 
                placeholder = { props.start }
                modifyEntry = { props.modifyEntry }
                attributeName = 'start'
                index = { props.index}
                />
                <span>-</span>
                <Attribute 
                pattern = {/((\b\d{1,2}\D{0,3})?\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|(Nov|Dec)(?:ember)?)\D?)(\d{1,2}(st|nd|rd|th)?)?((\s*[,.\-\/]\s*)\D?)?\s*((19[0-9]\d|20\d{2})|\d{2})*/} 
                errorHandler = {  props.errorHandler } 
                errorText = {'Please enter the date the on which you finished studying at this location (formatted "month name - year")'} 
                class = {'end'} 
                placeholder = { props.end}
                modifyEntry = { props.modifyEntry}
                attributeName = 'end'
                index = { props.index}
                />
              </div>
          </div>
          <div className='bottom-row'>
              <Attribute 
                pattern = {/^(?!\s*$).+/} 
                errorHandler = {  props.errorHandler } 
                errorText = {'Please enter an institution name. Degree names are defined as anything that is not a blank space.'} 
                class = {'institution'} 
                placeholder = { props.name}
                modifyEntry = { props.modifyEntry}
                attributeName = 'name'
                index = { props.index}
              />
              <Attribute
              pattern = {/^(?!\s*$).+/} 
              errorHandler = {  props.errorHandler } 
              errorText = {'Please enter a location name'} 
              class = {'location'} 
              placeholder = {props.location}
              modifyEntry = {props.modifyEntry}
              attributeName = 'location'
              index = { props.index}
              />
          </div>
        </div>
      )
}

export default Entry;