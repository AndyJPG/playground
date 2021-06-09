import React from 'react';

const Sidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">ANDY'S PLAYGROUND</div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-umbrella-beach"></i>
                    <span>Playground</span></a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-laugh-wink"></i>
                    <span>About Me</span></a>
            </li>

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            <div className="sidebar-card d-none d-lg-flex">
                <i className="fas fa-wrench fa-2x"></i>
                <p className="text-center mb-2"><strong>This site is under construction</strong></p>
            </div>
        </ul>
    );
};

export default Sidebar;