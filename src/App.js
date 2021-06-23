import React, {Component} from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import PageContentContainer from "./components/PageContentContainer/PageContentContainer";

class App extends Component {

    state = {
        sidebarToggled: false
    };

    _sidebarToggleHandler = () => {
        const sidebarToggled = this.state.sidebarToggled;

        this.setState({
            sidebarToggled: !sidebarToggled
        })
    };

    render() {
        return (
            <div id="wrapper">
                <Sidebar
                    sidebarToggled={this.state.sidebarToggled}
                    sidebarToggleHandler={this._sidebarToggleHandler} />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Navbar sidebarToggleHandler={this._sidebarToggleHandler} />
                        <PageContentContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
