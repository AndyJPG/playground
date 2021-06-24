// @flow
import * as React from 'react';

type Props = {
    qrCodeUrl: ?string
};

const displayCanvas = (props: Props): React.Node => {
    return (
        <div>
            {props.qrCodeUrl ? <img src={props.qrCodeUrl} alt="QR code"/> : null}
        </div>
    );
};

export default displayCanvas;