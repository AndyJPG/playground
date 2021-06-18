import React from 'react';

const CalculatorKey = (props) => {
    return (
        <button
            className={`calculator-key ${props.className ? props.className : ''}`}
            name={props.operator}
            onClick={props.click}>
            {props.operator}
        </button>
    )
};

// Uses react memo to prevent unnecessary re-rendering of every keys
export default React.memo(CalculatorKey);