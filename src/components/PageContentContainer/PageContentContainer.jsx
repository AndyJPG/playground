import React, {Component} from 'react';

// Playgrounds
import TicTacToe from "../../playgrounds/TicTacToe/TicTacToe";
import Calculator from "../../playgrounds/Calculator/Calculator";
import EmojiSearch from "../../playgrounds/EmojiSearch/EmojiSearch";

// Components
import PlaygroundsContainer from "../PlaygroundsContainer/PlaygroundsContainer";

class PageContentContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playgrounds: [
                {
                    name: "Emoji Search",
                    desc: <p>Search emoji with words like Love or Smiling<br/>This emoji search tool uses API provided
                        by emoji-api.com.<br/><a href="https://emoji-api.com/">Visit Emoji API website →</a></p>,
                    lastUpdate: "20/06/2021",
                    size: "col-xl-12 col-lg-12",
                    playground: <EmojiSearch/>
                },
                {
                    name: "Calculator",
                    desc: <p>Simple calculator like the one in iPhone<br/>Auto text scaling method is reference from
                        codepen calculator project. Link: <a
                            href="https://codepen.io/mjijackson/pen/xOzyGX">codepen calculator →</a>
                        <hr/>
                        <b>Notes:</b><br/>18/06/2021 : Optimized calculator keys with React.memo() enclosed to prevent
                        unnecessary
                        re-rendering when each keys were pressed.</p>,
                    lastUpdate: "15/06/2021",
                    size: "col-xl-6 col-lg-6",
                    playground: <Calculator/>
                },
                {
                    name: "Tic Tac Toe",
                    desc: <p>Tic Tac Toe game built by following React official tutorial. A great way to learn by doing.
                        Link: <a href="https://reactjs.org/tutorial/tutorial.html">Reactjs Tic Tac Toe tutorial →</a>
                    </p>,
                    lastUpdate: "10/06/2021",
                    size: "col-xl-6 col-lg-6",
                    playground: <TicTacToe/>
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