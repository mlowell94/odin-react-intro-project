import React, { Component } from 'react'

export class Error extends Component {
  render() {
    if (this.props.errorText === '') {
        return (
            <span className='hidden error'>

            </span>
        )
    }
    return (
            <span className='error'>
                {this.props.errorText}
            </span>
    )
  }
}

export default Error