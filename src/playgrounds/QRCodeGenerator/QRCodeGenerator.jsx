// @flow
import * as React from 'react';
import * as QRCode from 'qrcode';
import DisplayCanvas from "./components/DisplayCanvas";
import TextArea from "./components/Textarea";

import './qrCodeGenerator.css';

type Props = {};

type State = {
    message: string,
    qrCodeUrl: ?string,
    loading: boolean
};

class QRCodeGenerator extends React.Component<Props, State> {

    state: State = {
        message: "",
        qrCodeUrl: null,
        loading: false
    };

    componentDidMount() {
    }

    _textAreaOnchangeHandler: function = (e: SyntheticEvent<HTMLButtonElement>): void => {
        this.setState({
            message: e.currentTarget.value
        })
    };

    _qrCodeGenerateOnclickHandler: function = async (): Promise<void> => {
        try {
            await this.setState({
                loading: true
            });

            const qrCodeUrl: string = await QRCode.toDataURL(this.state.message);
            this.setState({
                loading: false,
                qrCodeUrl: qrCodeUrl
            });

        } catch (error) {
            console.log(error)
        }
    };

    render(): React.Node {
        return (
            <div>
                <TextArea
                    loading={this.state.loading}
                    generateQRCodeOnclickHandler={this._qrCodeGenerateOnclickHandler}
                    onchangeHandler={this._textAreaOnchangeHandler}
                    message={this.state.message}/>
                {this.state.qrCodeUrl ? <DisplayCanvas qrCodeUrl={this.state.qrCodeUrl}/> : null}
            </div>
        );
    }
}

export default QRCodeGenerator;