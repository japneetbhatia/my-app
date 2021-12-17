import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom"

function Navbar() {
    const [active, setActive] = useState('About')
    return (
        <div className="navbar">
            <div className="navbar__active">
                {active}
                {/* Home */}
            </div>

            <div className="navbar__items">
                <Link to="/">
                    {active !== 'About' &&
                        <div className="navbar__item" onClick={() => setActive('About')}>About</div>
                    }
                </Link>
                <Link to="/resume">
                    {active !== 'Resume' ? <div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div>
                        : null
                    }
                </Link>
                <Link to="/project">
                    {active !== 'Projects' && <div className="navbar__item" onClick={() => setActive('Projects')}>Projects</div>}
                </Link>
            </div>

        </div>
    )
}

export default Navbar