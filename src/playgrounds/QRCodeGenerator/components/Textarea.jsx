// @flow
import * as React from "react";

type Props = {
    message: string
};

const textArea = (props: Props) : React.Node => {
    return (
        <div className="form-group">
            <label htmlFor="qrCodeMessage">QR Code Message</label>
            <textarea className="form-control" id="qrCodeMessage">{props.message}</textarea>
        </div>
    );
};

export default textArea;