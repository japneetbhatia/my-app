import React from 'react'
import "./Resume.css"

// import Skillcard from './Skillcard'

function Resume() {
    return (
        <div className="resume">
            <div className="experience">
                
            </div>
            <div className="achievements">
                <p className='heading'>
                    Responsibilities
                </p>
                <p className='title'>
                    Core Member at "Google Developer Student Club"
                </p>
                <p className='points'>Being a Graphic Designer Co-Lead created various posters</p>
                <p className='points'>Being Member of Python Team contributed in few events</p>
                <p className='heading'>
                    Achievements
                </p>
                <p className='points'>Among Top-5 Teams in Hacktober Fest Hackathon 2019</p>
                <p className='points'>Among Top-12 Teams in Nasa Space App Challenge</p>
                <p className='points'>Among Top- 12 Participants in Autumn of Open Source 2020 organize by Sanscript</p>
                <p className='points'>Among Top Contributors in DevIncept Contribution Program 2.</p>
                <p className='points'>Open Source Contributor in Hacktober Fest 2019 and 2020</p>
            </div>
        </div>
    )
}

export default Resume
