import React from 'react';
import "./header.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="topbarContainer">
            <div>
                <Link to="/kazan" className={'city'} style={{ textDecoration: "none" }}>
                    <span className="logo">Казань</span>
                </Link>
            </div>
            <div className="menu">
            </div>
            <div>
                <Link to="/almet" className={'city'} style={{ textDecoration: "none" }}>
                    <span className="logo">Альметьевск</span>
                </Link>
            </div>
        </div>
    )
}

export default Header;