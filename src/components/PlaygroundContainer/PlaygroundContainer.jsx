import React, {Component} from 'react';

class PlaygroundContainer extends Component {
    state = {
        notesToggle: false
    };

    // Below is way to cache data in browser using localstorage
    // May not needed in this stage
    // // Cache status
    // componentDidMount() {
    //     const item = localStorage.getItem(this.props.name);
    //     if (item) {
    //         const itemObject = JSON.parse(item);
    //         const toggled = itemObject.notesToggle
    //         console.log(toggled);
    //         if (toggled !== this.state.notesToggle) {
    //             this.setState({
    //                 notesToggle: toggled
    //             })
    //         }
    //     }
    //     localStorage.setItem(this.props.name, JSON.stringify( {"notesToggle": this.state.notesToggle}));
    //     console.log("[PlaygroundContainer.js] ", this.props.name);
    // }
    //
    // // Cache status when updated
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     localStorage.setItem(this.props.name, JSON.stringify(this.state));
    // }

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