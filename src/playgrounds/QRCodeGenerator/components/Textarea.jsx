// @flow
import * as React from "react";
import Spinner from "../../EmojiSearch/components/Spinner";

type Props = {
    message: string,
    loading: boolean,
    onchangeHandler: (e: SyntheticEvent<HTMLButtonElement>) => void,
    generateQRCodeOnclickHandler: () => void
};

const textArea = (props: Props): React.Node => {
    return (
        <div className="form-group">
            <label htmlFor="qrCodeMessage">QR Code Message</label>
            <textarea
                className="form-control"
                id="qrCodeMessage"
                onChange={props.onchangeHandler}
                value={props.message}/>
            <br/>
            <button
                onClick={props.generateQRCodeOnclickHandler}
                className="btn btn-primary">Generate QRCode</button>
            {props.loading ? <Spinner/> : null}
        </div>
    );
};

export default textArea;