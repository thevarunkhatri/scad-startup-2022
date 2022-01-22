import React, {useState, useEffect} from "react";
import { Link } from "gatsby"
import { Transition } from 'react-transition-group';


import Logo from "../assets/svg/logo.svg"
import Hamburger from "../assets/svg/nav/mobileNavHamburger.svg"

import "../styles/nav.scss";

const duration = 300;

const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    //   opacity: 0,
    transform: "translateX(350px)"
}
  
const transitionStyles = {
    entering: { 
        //   opacity: 1,
        transform: "translateX(350px)" 
    },
    entered:  { 
        //   opacity: 1, 
        transform: "translateX(0px)"
    },
    exiting:  { 
        //   opacity: 0,
        transform: "translateX(350px)" 
    },
    exited:  { 
        //   opacity: 0,
        transform: "translateX(350px)"
    },
};

const defaultStyleTint = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
    display: 'none'
}
  
const transitionStylesTint = {
    entering: { 
        opacity: 0,
        display: 'block',        
    },
    entered:  { 
        opacity: 1,
        display: 'block',        
    },
    exiting:  { 
        opacity: 0,
        display: 'block',        
    },
    exited:  { 
        opacity: 0,
        display: 'none'
    },
};

const MobileNav = () => {
    const [activeNav, setActiveNav] = useState(false)

    const flipActiveNav = () => {
        setActiveNav(!activeNav)
    } 

    return(
        <nav className="mobileNav">
            <div className="navMain navContainer">
                <Link to="/">
                    <Logo/>
                </Link>
                <Hamburger onClick={flipActiveNav}/>
            </div>
            <Transition
                in={activeNav}
                timeout={duration}
                >

                {state => (
                    <>
                        <div className="navOptions" style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            <Hamburger onClick={flipActiveNav}/>
                            <ul>
                                <Link to="/schedule"><li>Schedule</li></Link>
                                <Link to="/deliverables"><li>Deliverables</li></Link>
                                <Link to="/people"><li>People</li></Link>
                                <Link to="/faq"><li>FAQ</li></Link>
                                <a href="https://www.instagram.com/scadstartup/" target="_blank"><li>Instagram</li></a>
                                <a href="https://forms.gle/x3XDcaPtxvhrPmGk6" target="_blank"><li>Sign Up</li></a>
                            </ul>
                        </div>
                        <div className="tint" style={{
                            ...defaultStyleTint,
                            ...transitionStylesTint[state]
                        }}>
                        </div>
                    </>
                )}
            </Transition>
        </nav>
    );
};

export default MobileNav;
