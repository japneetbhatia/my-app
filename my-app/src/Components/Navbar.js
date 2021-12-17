import React, { useState } from 'react';
import "./Navbar.css";

function Navbar() {
    const [active, setActive] = useState('About')
    return (
        <div className="navbar">
            <div className="navbar__active">
                {active}
                {/* Home */}
            </div>

            <div className="navbar__items">
                {/* <div>a</div>
                <div>a</div>
                <div>a</div> */}
                {active !== 'About' &&
                    <div className="navbar__item" onClick={() => setActive('About')}>About</div>
                }
                {active !== 'Resume' ? <div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div>
                    : null
                }

                {active !== 'Projects' && <div className="navbar__item" onClick={() => setActive('Projects')}>Projects</div>}
            </div>

        </div>
    )
}

export default Navbar