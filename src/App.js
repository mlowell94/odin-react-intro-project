import React, { Component } from 'react'
import Basics from './Components/Basics'
import Error from './Components/Error'
import Container from './Components/Container'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      errorMessage: ''
    }
    this.setErrorMessage = this.setErrorMessage.bind(this);
  }
  setErrorMessage(message) {
    this.setState({
      errorMessage: message
    })
  }
  render() {
    return (
      <div>
        <Basics errorHandler = { this.setErrorMessage } mode={ 'simple' } />
        <Container errorHandler = { this.setErrorMessage } type='EDUCATION'/>
        <Container errorHandler = { this.setErrorMessage } type='WORK EXPERIENCE'/>
        <Error errorText = { this.state.errorMessage }/>
      </div>
    )
  }
}

export default App
