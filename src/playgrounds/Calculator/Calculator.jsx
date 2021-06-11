import './calculator.css';
import React from 'react';

import CalculatorKey from "./components/CalculatorKey/CalculatorKey";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '0',
            previousValue: null,
            operator: null,
            reset: false,
            functionKeys: ["±", "%"],
            digitKeys: ["0", ".", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            operatorKeys: ["÷", "x", "-", "+", "="]
        }
    }

    _onchangeHandler = (e) => {
        let value = e.target.value === '' ? '0' : e.target.value;

        // Check if input is number
        const isNumber = /^\d+$/.test(value);
        if (!isNumber) {
            return;
        }

        // Check if input is still in initial status
        if (this.state.value === '0') {
            value = value.split('').pop()
        }

        this.setState({
            value: value
        });
    };

    _onClickHandler = (operator) => {
        const currentValue = this.state.value;

        // Cancel all data or just current value
        if (["AC", "C"].includes(operator)) {
            if (operator === 'C') {
                this.setState({
                    value: '0'
                })
            }

            if (operator === 'AC') {
                this.setState({
                    value: '0',
                    previousValue: null,
                    operator: null,
                    reset: false
                })
            }
        }

        // Function keys
        if (this.state.functionKeys.includes(operator)) {
            if (currentValue === '0') {
                return;
            }

            let result = currentValue;

            if (operator === '±') {
                if (parseFloat(currentValue) < 0) {
                    result = currentValue.substring(1, currentValue.length);
                } else {
                    result = "-" + currentValue;
                }
            }

            if (operator === '%') {
                const value = parseFloat(currentValue) / 100;
                result = value.toString();
            }

            this.setState({
                value: result
            })
        }

        // Digit keys
        if (this.state.digitKeys.includes(operator)) {
            let value = operator;

            if (operator === '.' && currentValue.includes(operator)) {
                return;
            }

            // Check if input is still in initial status
            if (currentValue !== '0' && !this.state.reset) {
                value = currentValue + value;
            }

            if (currentValue === '0' && operator === '.') {
                value = currentValue + value;
            }

            this.setState({
                value: value,
                reset: false
            })
        }

        // Operation keys
        if (this.state.operatorKeys.includes(operator)) {
            // equal can't be trigger by empty operator
            if (operator === "=" && this.state.operator === null) {
                this.setState({
                    reset: true
                });
                return;
            }

            let result;
            const previousValue = this.state.previousValue;

            // If no previous value push it to previous value
            if (previousValue === null) {
                this.setState({
                    operator: operator,
                    previousValue: currentValue,
                    reset: true
                });
                return;
            }

            let prevNumber = parseFloat(previousValue);
            let currentNumber = parseFloat(currentValue);
            let needByPass = false;

            if (prevNumber > 0 && prevNumber < 1 && currentNumber > 0 && currentNumber < 1) {
                prevNumber = prevNumber * Math.pow(10, 5);
                currentNumber = currentNumber * Math.pow(10, 5);
                needByPass = true;
            }

            switch (this.state.operator) {
                case '+':
                    result = prevNumber + currentNumber;
                    if (needByPass) {
                        result = result / Math.pow(10, 5);
                        needByPass = false;
                    }
                    break;
                case '-':
                    result = prevNumber - currentNumber;
                    if (needByPass) {
                        result = result / Math.pow(10, 5);
                        needByPass = false;
                    }
                    break;
                case 'x':
                    result = prevNumber * currentNumber;
                    if (needByPass) {
                        result = result / Math.pow(10, 10);
                        needByPass = false;
                    }
                    break;
                case '÷':
                    if (needByPass) {
                        result = result / Math.pow(10, 10);
                        needByPass = false;
                    }
                    result = prevNumber / currentNumber;
                    break;
                default:
                    break;
            }

            result = result.toString();

            this.setState({
                value: result,
                previousValue: operator === '=' ? null : result,
                operator: operator === '=' ? null : operator,
                reset: true
            })
        }
    };

    render() {
        const cancelButton = this.state.value === '0' ? "AC" : "C";

        console.log(this.state.previousValue, this.state.operator, this.state.value, this.state.reset);
        return (
            // <div className="calculator">
            //     <div className="calculator-keypad">
            //         <div className="input-keys">
            //             <div className="function-keys">
            //
            //             </div>
            //             <div className="digit-keys">
            //
            //             </div>
            //         </div>
            //         <div className="operator-keys">
            //
            //         </div>
            //     </div>
            // </div>
            <div className="calculator">
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this._onchangeHandler}/>
                <div>
                    <CalculatorKey
                        key={cancelButton}
                        click={() => this._onClickHandler(cancelButton)}
                        operator={cancelButton}/>
                    {this.state.functionKeys.map((operator) =>
                        <CalculatorKey
                            key={operator}
                            click={() => this._onClickHandler(operator)}
                            operator={operator}/>
                    )}
                </div>
                <div>
                    {this.state.digitKeys.map((operator) =>
                        <CalculatorKey
                            key={operator}
                            click={() => this._onClickHandler(operator)}
                            operator={operator}/>
                    )}
                </div>
                <div>
                    {this.state.operatorKeys.map((operator) =>
                        <CalculatorKey
                            key={operator}
                            click={() => this._onClickHandler(operator)}
                            operator={operator}/>
                    )}
                </div>
                <p>Operation:</p>
                <p>Previous
                    value: <b className="text-danger">{this.state.previousValue === null ? "null" : this.state.previousValue}</b> |
                    Operator: <b className="text-danger">{this.state.operator === null ? "null" : this.state.operator}</b> | Current
                    value: <b className="text-danger">{this.state.value}</b> </p>
            </div>
        );
    }
}

export default Calculator;