import React from 'react';
import Utilities from '../../../Core/Utilities'

const classMapper = {
    'uppercase': 'heading-upper-case',
    'lowercase':'heading-lower-case',
    'capitalize': 'heading-capitalize',
    'vertical': 'heading-vertical'
}

const One = (props) => <HeadingRoot {...props} tag="h1"/>
const Two = (props) => <HeadingRoot {...props} tag="h2"/>
const Three = (props) => <HeadingRoot {...props} tag="h3"/>
const Four = (props) => <HeadingRoot {...props} tag="h4"/>
const Five = (props) => <HeadingRoot {...props} tag="h5"/>
const Six = (props) => <HeadingRoot {...props} tag="h6"/>

const HeadingRoot = (props = {})=>{
    let valid = (children)=>{
        if(typeof children !== "string") throw `Passed type of ${typeof children} expected string`; 
    }
    let filter = valid(props.children) && props.filter && props.filter(props.children);
    return (
        <props.tag className={`${props.className || ""} 
            ${props.transform ? classMapper[props.transform] : ""}
            ${props.orientation ? classMapper[props.orientation] : ""}`}>
            {filter || props.children}
        </props.tag>
    )
}

export default {
    One,
    Two,
    Three,
    Four,
    Five,
    Six
};