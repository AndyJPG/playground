import React, { Component } from 'react';
import TestingPlayground from "../../playgrounds/TestingPlayground/TestingPlayground";

class PageContentContainer extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Playgrounds</h1>
                </div>
                <div className="row">
                    <TestingPlayground/>
                    <TestingPlayground/>
                </div>
            </div>
        );
    }
};

export default PageContentContainer;