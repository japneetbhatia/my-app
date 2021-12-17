import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom"

function Navbar() {
    const [active, setActive] = useState('');

    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL);
        if (currentURL.endsWith('/home'))
            setActive('About');
        else if (currentURL.endsWith('/projects'))
            setActive('Projects')
        else if (currentURL.endsWith('/resume'))
            setActive('Resume')

    }, [active])

    return (
        <div className="navbar">
            <div className="navbar__active">
                {active}
                {/* Home */}
            </div>

            <div className="navbar__items">
                <Link to="/home">
                    {active !== 'About' &&
                        <div className="navbar__item" onClick={() => setActive('About')}>About</div>
                    }
                </Link>
                <Link to="/resume">
                    {active !== 'Resume' ? <div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div>
                        : null
                    }
                </Link>
                <Link to="/projects">
                    {active !== 'Projects' && <div className="navbar__item" onClick={() => setActive('Projects')}>Projects</div>}
                </Link>
            </div>

        </div>
    )
}

export default Navbar