import React, {Component} from 'react';
import './tictactoe.css';
import Board from "./components/Board";

class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true
        };
    }

    _clickHandler = (i) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        })
    };

    _jumpToHandler = (step) => {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    };

    _restartHandler = () => {
        if (this.state.stepNumber === 0) {
            return;
        }

        this.setState({
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true
        })
    };

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this._jumpToHandler(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? 'X' : 'O');
        }

        const btnClasses = "btn " + (this.state.stepNumber === 0 ? "btn-secondary" : "btn-success");

        return (
            <div className="tic-tac-toe">
                <div className="game">
                    <div className="game-board">
                        <Board
                            squares={current.squares}
                            click={this._clickHandler}/>
                    </div>
                    <div className="game-info">
                        <div>
                            {status}
                        </div>
                        <ol>
                            {moves}
                        </ol>
                    </div>
                </div>
                <br/>
                {
                    this.state.stepNumber === 0 ?
                        <button
                            onClick={this._restartHandler}
                            className="btn btn-secondary" disabled={true}>Restart</button> :
                        <button
                            onClick={this._restartHandler}
                            className="btn btn-success">Restart</button>
                }
            </div>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default TicTacToe;