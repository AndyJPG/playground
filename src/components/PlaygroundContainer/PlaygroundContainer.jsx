import React from 'react';

const PlaygroundContainer = (props) => {
    return (
        <div className={props.size}>
            <div className="card shadow mb-4">
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{props.name}</h6>
                </div>
                <div className="card-body">
                    <div className="chart-area">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaygroundContainer;