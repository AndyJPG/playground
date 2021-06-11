import './calculator.css';
import React from 'react';

import CalculatorKey from "./components/CalculatorKey/CalculatorKey";
import AutoScalingText from "./components/AutoScalingText/AutoScalingText";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '0',
            previousValue: null,
            operator: null,
            reset: false,
            functionKeys: [
                {operator: "±", className: "key-sign col-4"},
                {operator: "%", className: "key-percent col-4"},
            ],
            digitKeys: [
                {operator: "0", className: "key-0 col-8"},
                {operator: "●", className: "key-dot col-4"},
                {operator: "1", className: "key-1 col-4"},
                {operator: "2", className: "key-2 col-4"},
                {operator: "3", className: "key-3 col-4"},
                {operator: "4", className: "key-4 col-4"},
                {operator: "5", className: "key-5 col-4"},
                {operator: "6", className: "key-6 col-4"},
                {operator: "7", className: "key-7 col-4"},
                {operator: "8", className: "key-8 col-4"},
                {operator: "9", className: "key-9 col-4"}
            ],
            operatorKeys: [
                {operator: "÷", className: "key-divide"},
                {operator: "x", className: "key-multiply"},
                {operator: "-", className: "key-subtract"},
                {operator: "+", className: "key-add"},
                {operator: "=", className: "key-equals"}
            ]
        }
    }

    componentDidMount() {
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
        if (this.state.functionKeys.find(element => element.operator === operator)) {
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
        if (this.state.digitKeys.find(element => element.operator === operator)) {
            let value = operator;

            if (value === '●') {
                value = '.';
            }

            if (operator === '●' && currentValue.includes('.')) {
                return;
            }

            // Check if input is still in initial status
            if (currentValue !== '0' && !this.state.reset) {
                value = currentValue + value;
            }

            if (currentValue === '0' && operator === '●') {
                value = currentValue + value;
            }

            this.setState({
                value: value,
                reset: false
            })
        }

        // Operation keys
        if (this.state.operatorKeys.find(element => element.operator === operator)) {
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

        return (
            <div>
                <div className="calculator">

                    <AutoScalingText
                        changed={this._onchangeHandler}
                        value={this.state.value} />

                    <div className="calculator-keypad">
                        <div className="col-9 input-keys">
                            <div className="function-keys">
                                <CalculatorKey
                                    className="col-4 key-clear"
                                    key={cancelButton}
                                    click={() => this._onClickHandler(cancelButton)}
                                    operator={cancelButton}/>
                                {this.state.functionKeys.map((operator) =>
                                    <CalculatorKey
                                        className={operator.className}
                                        key={operator.operator}
                                        click={() => this._onClickHandler(operator.operator)}
                                        operator={operator.operator}/>
                                )}
                            </div>
                            <div className="digit-keys">
                                {this.state.digitKeys.map((operator) =>
                                    <CalculatorKey
                                        className={operator.className}
                                        key={operator.operator}
                                        click={() => this._onClickHandler(operator.operator)}
                                        operator={operator.operator}/>
                                )}
                            </div>
                        </div>
                        <div className="col-3 operator-keys">
                            {this.state.operatorKeys.map((operator) =>
                                <CalculatorKey
                                    className={operator.className}
                                    key={operator.operator}
                                    click={() => this._onClickHandler(operator.operator)}
                                    operator={operator.operator}/>
                            )}
                        </div>
                    </div>

                </div>
                <div>
                    <br/>
                    <p>Operation:
                        <br/>
                        Previous value: <b
                            className="text-danger">{this.state.previousValue === null ? "null" : this.state.previousValue}</b>
                        <br/>
                        Operator: <b
                            className="text-danger">{this.state.operator === null ? "null" : this.state.operator}</b>
                        <br/>
                        Current value: <b className="text-danger">{this.state.value}</b></p>
                </div>
            </div>
        );
    }
}

export default Calculator;