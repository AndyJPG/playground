// @flow
import * as React from 'react';
import * as QRCode from 'qrcode';
import DisplayCanvas from "./components/DisplayCanvas";
import TextArea from "./components/Textarea";

type Props = {};

type State = {
    message: string,
    qrCodeUrl: ?string
};

class QRCodeGenerator extends React.Component<Props, State> {

    state: State = {
        message: "",
        qrCodeUrl: null
    };

    componentDidMount() {
        QRCode.toDataURL("test", (err, url) => {
            if (!err) {
                this.setState({
                    qrCodeUrl: url
                })
            }
        });
    }

    render(): React.Node {
        return (
            <div>
                <TextArea message={this.state.message}/>
                <DisplayCanvas qrCodeUrl={this.state.qrCodeUrl}/>
            </div>
        );
    }
}

export default QRCodeGenerator;