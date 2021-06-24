// @flow
import * as React from 'react';

type Props = {
    qrCodeUrl: ?string
};

class displayCanvas extends React.PureComponent<Props> {
    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        return (
            <div>
                {this.props.qrCodeUrl ? <img src={this.props.qrCodeUrl} alt="QR code"/> : null}
            </div>
        );
    }
}

// TODO: work out how to implement React memo
export default displayCanvas;