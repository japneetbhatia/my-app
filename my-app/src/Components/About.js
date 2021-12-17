import React from 'react'
import "./About.css"
import Skillcard from './Skillcard'

function About() {
    return (
        <div className="about">
            <div className="about-intro">
                I'm Japneet. I am final year student pursuing Bachelor of Technology, looking for 6-month internship or fulltime roles in Software Developer, Frontend Developer or Full Stack Developer roles.
            </div>
            <div className="skill-container">
                <p className="skill-heading">
                    My Skills
                </p>
                <div className="skills">
                    <div className='left-skills'>
                        <Skillcard title="Data Structures And Algorithms" bgcolor="#238DBB" progress='85'  height={30}/>
                        <Skillcard title="Java" bgcolor="#238DBB" progress='80'  height={30}/>
                        <Skillcard title="HTML And CSS" bgcolor="#238DBB" progress='90'  height={30}/>
                        <Skillcard title="DBMS" bgcolor="#238DBB" progress='70'  height={30}/>
                    </div>
                    <div className='right-skills'>
                        <Skillcard title="Javascript" bgcolor="#238DBB" progress='80'  height={30}/>
                        <Skillcard title="React Js" bgcolor="#238DBB" progress='80'  height={30}/>
                        <Skillcard title="Redux" bgcolor="#238DBB" progress='75'  height={30}/>
                        <Skillcard title="Node Js" bgcolor="#238DBB" progress='65'  height={30}/>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default About
