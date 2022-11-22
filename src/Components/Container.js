import React, { Component } from 'react'
import Description from './Description'
import Entry from './Entry'

export class Container extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            keys: [1,2,3],
            entries: [
                {
                name: this.props.type === 'EDUCATION' ? 'Test School ONE' : 'Employer ONE',
                experience: this.props.type === 'EDUCATION' ? 'Test Degree ONE' : 'Job Title ONE',
                start: 'January, 2000',
                end: 'February, 2000',
                location: 'Columbia, South Carolina',
                description: this.props.type === 'EDUCATION' ? [''] : ['lorem ipsum dolor sit amet'],
                key: 1
                },
            ]
        }
        this.getEntries = this.getEntries.bind(this)
        this.removeEntry = this.removeEntry.bind(this)
        this.modifyEntry = this.modifyEntry.bind(this)
        this.addEntry = this.addEntry.bind(this)
        this.getKeys = this.getKeys.bind(this)
        this.addDescription = this.addDescription.bind(this)
        this.removeDescription = this.removeDescription.bind(this)
    }

    getEntries() {
        return this.state.entries;
    }

    removeEntry(index) {
        const firstHalf = this.state.entries.slice(0, index);
        const secondHalf = this.state.entries.slice(index+1)
        this.setState({
            entries: firstHalf.concat(secondHalf)
        })
    }

    modifyEntry(attribute, index, value, descIndex) {
        if(attribute === 'description') {
            const clonedEntries = structuredClone(this.getEntries())
            clonedEntries[index][`${attribute}`][descIndex] = value;
            this.setState({
                entries: clonedEntries
            })
        } else {
        const clonedEntries = structuredClone(this.getEntries());
        clonedEntries[index][`${attribute}`] = value;
        this.setState({
            entries: clonedEntries
        })
    }
    }

    getKeys() {
        return this.state.keys;
    }

    addEntry() {
        let newKey = 1;
        while (this.getKeys().includes(newKey)) {
            newKey = Math.floor(Math.random() * 1000);
        }
        const clonedKeys = [...this.getKeys()]
        clonedKeys.push(newKey)
        const clonedEntries = structuredClone(this.getEntries());
        const newEntry = {
            name: this.props.type === 'EDUCATION' ? 'Example School' : 'Example Employer',
            experience: this.props.type === 'EDUCATION' ? 'Example Degree' : 'Example Job Title',
            start: '01-01-2000',
            end: '02-02-2000',
            location: 'Example City, Example Country',
            description: this.props.type === 'EDUCATION' ? [''] : ['lorem ipsum dolor sit amet'],
            key: newKey,
        }
        clonedEntries.push(newEntry);
        this.setState({
            keys: clonedKeys,
            entries: clonedEntries
        })
    }

    addDescription(index) {
        const clonedEntries = structuredClone(this.getEntries())
        clonedEntries[index].description.push(`Default text #${clonedEntries[index].description.length}`)
        this.setState({
            entries: clonedEntries
        })    
    }

    removeDescription(index, descIndex) {
        const firstHalf = this.state.entries[index].description.slice(0, descIndex);
        const secondHalf = this.state.entries[index].description.slice(descIndex+1);
        const newArray = firstHalf.concat(secondHalf);
        const clonedEntries = structuredClone(this.getEntries())
        clonedEntries[index].description = newArray
        this.setState({
            entries: clonedEntries
        })    
    }

    render() {
        let output;
        if (this.props.type === 'EDUCATION') {
            output =
            this.state.entries.map
            ((element, index) => 
            <div key={element.key} className="entry">
                <Entry 
                name = { element.name } 
                experience = { element.experience } 
                start = { element.start } 
                end = { element.end } 
                location = { element.location } 
                index = { index }
                errorHandler = {this.props.errorHandler}
                removeEntry = {this.removeEntry}
                modifyEntry = {this.modifyEntry}
                type = {this.props.type}
                />
                <button className="remove-entry" onClick = {() => {this.removeEntry(index)}}> Remove Entry</button>
            </div>)
        } else if (this.props.type === 'WORK EXPERIENCE') {
            output =
            this.state.entries.map
            ((element, index) => 
            <div key={element.key} className="entry">
                <Entry 
                name = { element.name } 
                experience = { element.experience } 
                start = { element.start } 
                end = { element.end } 
                location = { element.location } 
                index = { index }
                errorHandler = {this.props.errorHandler}
                removeEntry = {this.removeEntry}
                modifyEntry = {this.modifyEntry}
                type = {this.props.type}
                />
                <Description 
                description = {element.description}
                errorHandler = {this.props.errorHandler}
                modifyEntry = {this.modifyEntry}
                addDescription = {this.addDescription}
                removeDescription = {this.removeDescription}
                index = {index}
                />
                <button className="remove-entry" onClick = {() => {this.removeEntry(index)}}> Remove Entry</button>
            </div>)
        }
        return (
          <div className='container'>
            <span className='header'>{this.props.type}</span>
            {output}
            <button onClick = {() => this.addEntry()} className = "add-new">Add New Entry</button>
        </div>
    )
  }
}

export default Container