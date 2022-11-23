import React, { useState, useEffect } from "react";
import { useWhatChanged } from '@simbathesailor/use-what-changed';



const Attribute = (props) => {
    const [content, setContent] = useState(props.placeholder);
    const [current, setCurrent] = useState('');
    const [active, setActive] = useState(false);
    const changeActive = () => {
        setActive(active ? false : true)
    }

    const changeCurrent = (value) => {
        setCurrent(value)
    }

    const changeContent = (value) => {
        setContent(value)
    }

    const handleChange = (value) => {
        if (!(props.pattern.test(value))) {
            setCurrent(null);
        } else {
            setCurrent(value);
        }
    }

    const handleClick = () => {
        setActive(active ? false : true)
        changeCurrent(content)
    }

    const handleKeyPress = (value) => {
        if (value === 'Enter') {
            if (current !== null) {
                changeContent(current);
                changeActive();
                props.errorHandler('')
            }else {
                props.errorHandler(props.errorText)
            }
        }
    }

    let deps = [content]
    useWhatChanged(deps)

    useEffect(() => {
        if (props.mode !== "simple") {
            props.modifyEntry(props.attributeName, props.index, content, props.descIndex)
        }
    }, [content])


    if (active) {
        return (
            <input 
            className = {props.class} 
            defaultValue= { '' } 
            onChange={(e) => handleChange(e.target.value)} 
            onKeyPress={(e) => handleKeyPress(e.key)} 
            pattern = {props.pattern}
            />
        )
    }
    return (
        <span className = {props.class} onClick={() => handleClick()}>
            {content === '' ? props.placeholder : content}
        </span>
    )
}

export default Attribute;