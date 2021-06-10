import React, { Component } from 'react';
import TestingPlayground from "../../playgrounds/TestingPlayground/TestingPlayground";
import PlaygroundContainer from "../PlaygroundContainer/PlaygroundContainer";

class PageContentContainer extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Playgrounds</h1>
                </div>
                <div className="row">
                    <PlaygroundContainer
                        name="Testing Playground"
                        size="col-xl-6 col-lg-5"><TestingPlayground/></PlaygroundContainer>
                </div>
            </div>
        );
    }
};

export default PageContentContainer;