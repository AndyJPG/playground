import React, {Component} from 'react';

class PlaygroundContainer extends Component {
    state = {
        notesToggle: false
    };

    _notesToggleHandler = (e) => {
        if (e.target.className.includes("active")) {
            return;
        }
        const notesToggle = this.state.notesToggle;
        this.setState({
            notesToggle: !notesToggle
        })
    };

    render() {
        return (
            <div className={this.props.size}>
                <div className="card shadow mb-4">
                    <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">{this.props.name}</h6>
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <button className={"nav-link " + (this.state.notesToggle ? "" : "active")}
                                   onClick={this._notesToggleHandler}>{this.props.name}</button>
                            </li>
                            <li className="nav-item">
                                <button className={"nav-link " + (this.state.notesToggle ? "active" : "")}
                                   onClick={this._notesToggleHandler}>Notes</button>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        {this.state.notesToggle ? this.props.desc : this.props.children}
                    </div>
                    <div className="card-footer text-muted">
                        - Last update : {this.props.lastUpdate}
                    </div>
                </div>
            </div>
        );
    }
};

export default PlaygroundContainer;