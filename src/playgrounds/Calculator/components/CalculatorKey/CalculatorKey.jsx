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

export default CalculatorKey;