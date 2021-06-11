import React, {Component} from 'react';

// Playgrounds
import TicTacToe from "../../playgrounds/TicTacToe/TicTacToe";
import Calculator from "../../playgrounds/Calculator/Calculator";

// Components
import PlaygroundsContainer from "../PlaygroundsContainer/PlaygroundsContainer";

class PageContentContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playgrounds: [
                {
                    name: "Calculator",
                    desc: "Simple calculator like the one in iPhone",
                    lastUpdate: "15/06/2021",
                    size: "col-xl-6 col-lg-6",
                    playground: <Calculator />
                },
                {
                    name: "Tic Tac Toe",
                    desc: "Tic Tac Toe game built by following React official tutorial",
                    lastUpdate: "10/06/2021",
                    size: "col-xl-6 col-lg-6",
                    playground: <TicTacToe />
                }
            ]
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Playgrounds</h1>
                </div>

                <PlaygroundsContainer
                    playgrounds={this.state.playgrounds}/>
            </div>
        );
    }
};

export default PageContentContainer;