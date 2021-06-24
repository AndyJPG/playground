// @flow
import * as React from 'react';

type Props = {};

type State = {
    count: number
};

class QRCodeGenerator extends React.Component<Props, State> {

    state: State = {
        count: 0
    };

    componentDidMount() {
        setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count + 1
            }));
        }, 1000);
    }

    _needANumber: function = (digit: number): string => {
        return digit.toString();
    };

    render(): React.Node {
        return (
            <div>
                QR Code Generator {this._needANumber(this.state.count)}
            </div>
        );
    }
}

export default QRCodeGenerator;