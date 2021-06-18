import React, { Component } from 'react';

class AutoScalingText extends Component {

    state = {
        scale: 1,
        availableRef: React.createRef(),
        actualRef: React.createRef()
    };

    // When text updated
    // Scale current div container based on it's calculated ratio
    componentDidUpdate() {
        const { scale } = this.state;

        // Calculating ratio using outer div and inner div
        const availableWidth = this.state.availableRef.current.offsetWidth;
        const actualWidth = this.state.actualRef.current.offsetWidth;
        const actualScale = availableWidth / actualWidth;

        if (scale === actualScale) {
            return;
        }

        // Scale up or down the inner div based on calculated ratio
        if (actualScale < 1) {
            this.setState({scale: actualScale});
        } else if (scale < 1) {
            this.setState({ scale: 1});
        }
    }

    render() {
        const { scale } = this.state;

        // Put comma for display value
        let displayValue = this.props.value;
        if (displayValue.includes(".")) {
            const splitValue = displayValue.split(".");
            const valueOne = splitValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            displayValue = valueOne + "." + splitValue[1];
        } else {
            displayValue = displayValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        return (
            <div ref={this.state.availableRef} className="calculator-display">
                <input
                    type="text"
                    value={this.props.value}
                    onChange={this.props.changed}/>
                <div
                    className="auto-scaling-text"
                    style={{transform: `scale(${scale}, ${scale})`}}
                     ref={this.state.actualRef}>{displayValue}</div>
            </div>
        );
    }
}

export default AutoScalingText;