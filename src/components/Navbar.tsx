import React from 'react';
import { NavLink, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
    const location = useLocation();

    return (
        <nav>
            <div className="nav-wrapper purple darken-2 px1">
                <NavLink to="/" className="brand-logo">React TS</NavLink>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to="/" >Tasks</NavLink></li>
                        <li><NavLink to="/about" state={{from: location}}>Info</NavLink></li>
                    </ul>
            </div>
        </nav>
    );
};

export default Navbar;