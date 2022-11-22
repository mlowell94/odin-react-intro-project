import React, { Component } from 'react'

export class Attribute extends Component {
    constructor() {
        super()

        this.state = {
            content: '',
            current: '',
            active: false,
        }
    }

    setActive() {
        const newActiveState = this.getActive() ? false : true;
        this.setState({
            active: newActiveState
        })
    }

    getActive() {
        return this.state.active;
    }

    setContent(value) {
        if (this.props.mode === 'simple') {
            this.setState({
                content: value
            })
        } else {
        this.setState({
            content: value
        }, () => { this.props.modifyEntry(this.props.attributeName, this.props.index, this.state.content, this.props.descIndex); })
        }
    }

    getContent() {
        return this.state.content
    }

    getCurrent() {
        return this.state.current
    }

    setCurrent(value) {
        this.setState({
            current: value
        })
    }

    handleChange(value) {
        if (!(this.props.pattern.test(value))) {
            this.setCurrent(null);
        } else {
            this.setCurrent(value);
        }
    }

    handleClick() {
        this.setActive();
        this.setCurrent(this.getContent());
    }

    handleKeyPress(value) {
        if (value === 'Enter') {
            if (this.getCurrent() !== null) {
                this.setContent(this.state.current);
                this.setActive();
                this.props.errorHandler('')
            }else {
                this.props.errorHandler(this.props.errorText)
            }
        }
    }
  render() {
    if (this.getActive()) {
        return (
            <input 
            className = {this.props.class} 
            defaultValue= { this.state.content } 
            onChange={(e) => this.handleChange(e.target.value)} 
            onKeyPress={(e) => this.handleKeyPress(e.key)} 
            pattern = {this.props.pattern}
            />
        )
    }
    return (
        <span className = {this.props.class} onClick={() => this.handleClick()}>
            {this.state.content === '' ? this.props.placeholder : this.state.content}
        </span>
    )
  }
}

export default Attribute;