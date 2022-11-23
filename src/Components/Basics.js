import React from "react";
import Attribute from './Attribute'


const Basics = (props) => {
    return (
      <div className = 'basics'>
        <Attribute class = {'name'} placeholder = {'Name'} pattern = {/^[A-Z][-'a-zA-Z]+,?\s[A-Z][-'a-zA-Z]{0,19}$/} 
        errorHandler = {props.errorHandler} errorText = {'Names should consist of a first name and a last name, with the first letter of each capitalized (ex. "John Smith")'}
        mode = { props.mode }/>
        <Attribute class = {'phone'} placeholder = {'Phone Number'} pattern = {/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/} 
        errorHandler = {props.errorHandler} errorText = {'Phone numbers should consist of 3 sequences of digits, separated by a dash (ex. "123-456-7890")'}
        mode = { props.mode }/>
        <Attribute class = {'email'} placeholder = {'Email'} pattern = {/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/} 
        errorHandler = {props.errorHandler} errorText = {'Emails should consist of a username, followed by an @ symbol, and the domain name (ex. "someguy@gmail.com")'}
        mode = { props.mode }/>
        <Attribute class = {'website'} placeholder = {'Website'} pattern = {/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/} 
        errorHandler = {props.errorHandler} errorText = {'Websites should consist of a sitename followed by a domain (ex. (ex. "website.io")'}
        mode = { props.mode }/>
      </div>
    )
}

export default Basics