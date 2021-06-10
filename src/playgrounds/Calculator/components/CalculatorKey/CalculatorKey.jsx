import React from 'react';

const CalculatorKey = (props) => {
    return (
        <button
            name={props.operator}
            onClick={props.click}>
            {props.operator}
        </button>
    )
};

export default CalculatorKey;