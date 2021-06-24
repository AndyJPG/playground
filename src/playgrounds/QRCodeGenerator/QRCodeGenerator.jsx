// @flow
import * as React from 'react';
import * as QRCode from 'qrcode';
import DisplayCanvas from "./components/DisplayCanvas";

type Props = {};

type State = {
    count: number,
    qrCodeUrl: ?string
};

class QRCodeGenerator extends React.Component<Props, State> {

    state: State = {
        count: 0,
        qrCodeUrl: null
    };

    componentDidMount() {
        QRCode.toDataURL("Hello Would!", (err, url) => {
            if (!err) {
                this.setState({
                    qrCodeUrl: url
                })
            }
        });
    }

    _needANumber: function = (digit: number): string => {
        return digit.toString();
    };

    render(): React.Node {
        return (
            <div>
                QR Code Generator {this._needANumber(this.state.count)}
                <DisplayCanvas qrCodeUrl={this.state.qrCodeUrl}/>
            </div>
        );
    }
}

export default QRCodeGenerator;