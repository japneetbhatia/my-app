import React from 'react'
import "./Sidebar.css"
import coder from "../assets/coder.svg"
// import FaceIcon from '@mui/icons-material/Face';
import linkedin from '../assets/icons/linkedin.png'
import leetcode from '../assets/icons/leetcode.png'
import github from '../assets/icons/github.png'
import location from '../assets/icons/location.png'
import tie from '../assets/icons/tie.png'
import email from '../assets/icons/email.png'
import phone from '../assets/icons/phone.png'

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
            <a href="">
                <div className='sidebar-item'>
                    <img src={tie} alt="resume" className='tie-icon' /> Download Resume
                </div>
            </a>
            {/* <figure className="social-icons">
                <a href=""><img src={linkedin} alt="linkedin" className="sidebar__icon" /></a>
                <a href=""><img src={leetcode} alt="leetcode" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href=""><img src={github} alt="github" className="sidebar__icon" />github</a>
                </div>
                <div className="sidebar__location">
                    <img src={location} alt="location" className="sidebar__icon" />
                    Delhi, India
                </div>
                <div className="sidebar__item"> <img src={email} alt="email" className="sidebar__icon" />
                     japneetk1111@gmail.com</div>
                <div className="sidebar__item"><img src={phone} alt="phone" className="sidebar__icon" />
                    8076267548</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div> */}
        </div>
    )
}

export default Sidebar
