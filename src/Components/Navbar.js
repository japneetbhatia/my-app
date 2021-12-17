import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom"

function Navbar() {
    const [active, setActive] = useState('');

    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL);
        if (currentURL.endsWith('/'))
            setActive('Skills');
        else if (currentURL.endsWith('/resume'))
            setActive('Activities')

    }, [active])

    return (
        <div className="navbar">
            <div className="navbar__active">
                {active}
                {/* Home */}
            </div>

            <div className="navbar__items">
                <Link to="/">
                    {active !== 'Skills' &&
                        <div className="navbar__item" onClick={() => setActive('Skills')}>Skills</div>
                    }
                </Link>
                <Link to="/resume">
                    {active !== 'Activities' ? <div className="navbar__item" onClick={() => setActive('Activities')}>Activities</div>
                        : null
                    }
                </Link>
            </div>

        </div>
    )
}

export default Navbar
