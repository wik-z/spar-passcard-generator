import React from 'react';

import './FieldContainer.css';

export default function FieldContainer({ className, children }) {
    return <div className={`field-container ${className || ''}`}>
        {children}
    </div>
}