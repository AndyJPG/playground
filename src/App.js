import React, {Component} from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";

class App extends Component {

    render() {
        return (
            <div id="wrapper">
                <Sidebar/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>
                        </button>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Andy J</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default App;
