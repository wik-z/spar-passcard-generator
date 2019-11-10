import React from 'react';
import './Select.css';

export default function Select(props) {
    return <select {...props}>{props.children}</select> 
}

export function Option(props) {
    return <option {...props}>{props.children}</option>
}

Select.Option = Option;