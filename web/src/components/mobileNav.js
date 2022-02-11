import React, {useState, useEffect} from "react";
import { Link } from "gatsby"
import { Transition } from 'react-transition-group';


import Logo from "../assets/svg/logo.svg"
import Hamburger from "../assets/svg/nav/mobileNavHamburger.svg"
import Close from "../assets/svg/nav/mobileNavClose.svg"
import ChevronRight from "../assets/svg/nav/chevronRight.svg"
import Instagram from "../assets/svg/footer/Instagram.svg"
import Discord from "../assets/svg/footer/Discord.svg"

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
                            <div className="close">
                                <Close onClick={flipActiveNav}/>
                            </div>
                            <ul className="webLinks">
                                <Link to="/schedule"><li>Schedule <ChevronRight/></li></Link>
                                <Link to="/sessions"><li>Sessions <ChevronRight/></li></Link>
                                <Link to="/deliverables"><li>Deliverables <ChevronRight/></li></Link>
                                <Link to="/team"><li>Team <ChevronRight/></li></Link>
                                <Link to="/industryGuests"><li>Industry Guests <ChevronRight/></li></Link>
                                <Link to="/faq"><li>FAQ <ChevronRight/></li></Link>
                                {/* <a href="https://www.instagram.com/scadstartup/" target="_blank"><li>Instagram <ChevronRight/></li></a>
                                <a href="https://forms.gle/x3XDcaPtxvhrPmGk6" target="_blank"><li>Sign Up <ChevronRight/></li></a> */}
                            </ul>
                            <ul className="socialLinks">
                                <Link to="https://www.instagram.com/scadstartup/"  target="_blank" ><li>
                                <Instagram/>
                                </li></Link>
                                <Link to="https://discord.gg/D4AFxAwwp6" target="_blank" ><li>
                                    <Discord/>
                                </li></Link>
                                <Link to="https://forms.gle/wi1fjdRWZVZVwVUJA" target="_blank">
                                    <button class="footerButton">Vote &nbsp; {String.fromCharCode(10230)}</button>
                                </Link>
                                {/* <Link to="https://forms.gle/x3XDcaPtxvhrPmGk6" target="_blank">
                                    <button class="footerButton">Sign up &nbsp; {String.fromCharCode(10230)}</button>
                                </Link> */}
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
