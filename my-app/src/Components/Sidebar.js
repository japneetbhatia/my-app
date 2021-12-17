import React from 'react'
import "./Sidebar.css"
import coder from "../assets/icons/coder.jpg"
import hackerrank from '../assets/icons/HackerRank.png'
import linkedin from '../assets/icons/linkedin.png'
import leetcode from '../assets/icons/leetcode.png'
import github from '../assets/icons/github.png'
import location from '../assets/icons/location.png'
import tie from '../assets/icons/tie.png'
import email from '../assets/icons/email.png'
import phone from '../assets/icons/phone.png'
import portfolio from "../assets/icons/portfolio.png"


function Sidebar() {
    const handleEmailMe = () => {
        window.open("mailto:japneetk1111@gmail.com")
    }
    return (
        <div className='sidebar-container'>
            <div className='icon'>
            <img src={coder} alt="image" className='face-icon' />
            </div>
            <div className='name-bar'>
                Japneet Kaur Bhatia
            </div>
            <div className='sidebar-title'>
                SOFTWARE DEVELOPER
            </div>
            <a href="https://drive.google.com/file/d/17sDgWo2pDfWE8kkalPMKTY7HYqcQi-Fp/view">
                <div className='sidebar-item'>
                    <img src={tie} alt="resume" className='tie-icon' /> Download Resume
                </div>
            </a>
            <div className="social-handles">
                <div className="sidebar__item">
                    <a href="https://www.linkedin.com/in/japneet-kaur-b-400b60194/"><img src={linkedin} alt="linkedin" className="sidebar__icon" /></a>
                    Linkedin
                </div>
                <div className="sidebar__item">
                    <a href="https://japneetkaur-ff73e.web.app/"><img src={portfolio} alt="portfolio" className="sidebar__icon" /></a>
                    Portfolio
                </div>
                <div className="sidebar__item">
                    <a href="https://github.com/japneetbhatia"><img src={github} alt="github" className="sidebar__icon" /></a>
                    Github
                </div>                
                <div className="sidebar__item ">
                    <a href="https://leetcode.com/japneetkaur/"><img src={leetcode} alt="leetcode" className="sidebar__icon" /></a>
                    Leetcode
                </div>
                <div className="sidebar__item">
                    <a href="https://www.hackerrank.com/japneetk1111"><img src={hackerrank} alt="hackerrank" className="sidebar__icon" /></a>
                    Hackerrank
                </div>
            </div>
            <div className="sidebar-contact">
                <div >
                    <img src={location} alt="location" className="sidebar__icon" />
                    Delhi, India
                </div>
                <div><img src={phone} alt="phone" className="sidebar__icon" />
                    8076267548</div>
                <div> <img src={email} alt="email" className="sidebar__icon" />
                     japneetk1111@gmail.com</div>
                
            </div>
            <button className="sidebar__email" onClick={handleEmailMe}>CONTACT ME</button>
        </div>
    )
}

export default Sidebar
