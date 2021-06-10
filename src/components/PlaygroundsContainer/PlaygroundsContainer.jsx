import React from 'react';
import PlaygroundContainer from "../PlaygroundContainer/PlaygroundContainer";

const PlaygroundsContainer = (props) => {
    return (
        <div className="row">
            {props.playgrounds.map((playground) =>
                <PlaygroundContainer
                    key={playground.name}
                    name={playground.name}
                    desc={playground.desc}
                    lastUpdate={playground.lastUpdate}
                    size={playground.size}>
                    {playground.playground}
                </PlaygroundContainer>
            )}
        </div>
    )
};

export default PlaygroundsContainer;