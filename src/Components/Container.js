import React, { useState, useEffect } from "react";
import Description from './Description'
import Entry from './Entry'
import { useWhatChanged } from '@simbathesailor/use-what-changed';

const Container = (props) => {
    const [obj, setObj] = 
        useState({keys:[1], 
            entries:[
                {
                name: props.type === 'EDUCATION' ? 'Test School ONE' : 'Employer ONE',
                experience: props.type === 'EDUCATION' ? 'Test Degree ONE' : 'Job Title ONE',
                start: 'January, 2000',
                end: 'February, 2000',
                location: 'Columbia, South Carolina',
                description: props.type === 'EDUCATION' ? [''] : ['lorem ipsum dolor sit amet'],
                key: 1
            }
        ]
    }
);
    let deps = [obj.entries[0].name, obj.entries[0].experience, obj.entries[0].start,
    obj.entries[0].end, obj.entries[0].location]
    useWhatChanged(deps)

    useEffect(() => {
    }, [deps]);

    const removeEntry = (index) => {
        const keysCopy = [...obj.keys]
        const keyIndexToRemove = keysCopy.indexOf(obj.entries[index].key)
        keysCopy.splice(keyIndexToRemove, 1)
        const firstHalf = obj.entries.slice(0, index);
        const secondHalf = obj.entries.slice(index+1)
        setObj(({keys: keysCopy, entries: firstHalf.concat(secondHalf)}))
    }

    const modifyEntry = (attribute, index, value, descIndex) => {
        console.log('attribute to modify is ' + attribute)
        console.log('index to modify is ' + index)
        console.log('value that will be passed is ' + value)
        console.log('if there is a description to alter, its index is ' + descIndex)

        if(attribute === 'description') {
            const clonedEntries = structuredClone(obj.entries)
            clonedEntries[index][`${attribute}`][descIndex] = value;
            setObj(prev => ({...prev, entries: clonedEntries}))
        } else {
            const clonedEntries = structuredClone(obj.entries);
            clonedEntries[index][`${attribute}`] = value;
            console.log(clonedEntries);
            setObj(prev => ({keys: prev.keys, entries: clonedEntries}))
        }
    }

    const addEntry = () => {
        let newKey = 1;
        while (obj.keys.includes(newKey)) {
            newKey = Math.floor(Math.random() * 1000);
        }
        const clonedKeys = [...obj.keys]
        clonedKeys.push(newKey);
        const clonedEntries = structuredClone(obj.entries);
        const newEntry = {
            name: props.type === 'EDUCATION' ? 'Example School' : 'Example Employer',
            experience: props.type === 'EDUCATION' ? 'Example Degree' : 'Example Job Title',
            start: 'January, 2000',
            end: 'February, 2000',
            location: 'Example City, Example Country',
            description: props.type === 'EDUCATION' ? [''] : ['lorem ipsum dolor sit amet'],
            key: newKey,
        }
        clonedEntries.push(newEntry);
        setObj({keys: clonedKeys, entries: clonedEntries});
    }

    const addDescription = (index) => {
        const clonedEntries = structuredClone(obj.entries);
        clonedEntries[index].description.push(`Default text #${clonedEntries[index].description.length}`);
        setObj(prev => ({keys: prev.keys, entries: clonedEntries}))
        console.log(obj)
    }

    const removeDescription = (index, descIndex) => {
        const firstHalf = obj.entries[index].description.slice(0, descIndex);
        const secondHalf = obj.entries[index].description.slice(descIndex+1);
        const newArray = firstHalf.concat(secondHalf);
        const clonedEntries = structuredClone(obj.entries)
        clonedEntries[index].description = newArray
        setObj(prev => ({keys: prev.keys, entries: clonedEntries}))
    }
    

    let output;
    if (props.type === "EDUCATION") {
        output =
        obj.entries.map
        ((element, index) => 
        <div key={element.key} className="entry">
            <Entry
            name = { element.name } 
            experience = { element.experience } 
            start = { element.start } 
            end = { element.end } 
            location = { element.location } 
            index = { index }
            errorHandler = {props.errorHandler}
            removeEntry = {removeEntry}
            modifyEntry = {modifyEntry}
            type = {props.type}
            />
            <button className="remove-entry" onClick = {() => {removeEntry(index)}}> Remove Entry</button>
        </div>)
    } else if (props.type === "WORK EXPERIENCE") {
        output =
        obj.entries.map
        ((element, index) => 
        <div key={element.key} className="entry">
            <Entry
                name = { element.name } 
                experience = { element.experience } 
                start = { element.start } 
                end = { element.end } 
                location = { element.location } 
                index = { index }
                errorHandler = {props.errorHandler}
                removeEntry = {removeEntry}
                modifyEntry = {modifyEntry}
                type = {props.type}
            />
            <Description
                description = {element.description}
                errorHandler = {props.errorHandler}
                modifyEntry = {modifyEntry}
                addDescription = {addDescription}
                removeDescription = {removeDescription}
                index = {index}
            />
            <button className="remove-entry" onClick = {() => {removeEntry(index)}}> Remove Entry</button>
        </div>)
    }
    return (
        <div className='container'>
          <span className='header'>{props.type}</span>
            { output }
          <button onClick = {() => addEntry()} className = "add-new">Add New Entry</button>
      </div>
  )
}

export default Container;