import React, {Component} from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import PageContentContainer from "./components/PageContentContainer/PageContentContainer";

class App extends Component {

    render() {
        return (
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Navbar />
                        <PageContentContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
