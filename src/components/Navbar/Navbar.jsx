import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"/>
            </button>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Andy J</span>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;