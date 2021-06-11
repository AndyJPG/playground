import React, { Component } from 'react';

class AutoScalingText extends Component {

    state = {
        scale: 1,
        availableRef: React.createRef(),
        actualRef: React.createRef()
    };

    componentDidUpdate() {
        console.log('did update');
        const { scale } = this.state;

        const availableWidth = this.state.availableRef.current.offsetWidth;
        const actualWidth = this.state.actualRef.current.offsetWidth;
        const actualScale = availableWidth / actualWidth;

        if (scale === actualScale) {
            return;
        }

        if (actualScale < 1) {
            this.setState({scale: actualScale});
        } else if (scale < 1) {
            this.setState({ scale: 1});
        }
        console.log('scale', availableWidth, actualWidth, actualScale, scale);
    }

    render() {
        const { scale } = this.state;

        return (
            <div ref={this.state.availableRef} className="calculator-display">
                <input
                    type="text"
                    value={this.props.value}
                    onChange={this.props.changed}/>
                <div
                    className="auto-scaling-text"
                    style={{transform: `scale(${scale}, ${scale})`}}
                     ref={this.state.actualRef}>{this.props.value}</div>
            </div>
        );
    }
}

export default AutoScalingText;