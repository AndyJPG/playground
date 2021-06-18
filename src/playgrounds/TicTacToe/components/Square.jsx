import React from 'react';

const Square = (props) => {
    return (
        <button
            className="square"
            onClick={props.click}>
            {props.value}
        </button>
    )
};

export default React.memo(Square);