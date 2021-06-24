// @flow
import * as React from "react";

type Props = {
    message: string,
    onchangeHandler: (e: SyntheticEvent<HTMLButtonElement>) => void
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
            <button className="btn btn-primary">Generate QRCode</button>
        </div>
    );
};

export default textArea;