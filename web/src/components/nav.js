import React from "react";
import { Link } from "gatsby"
import NavFlorish from "../assets/svg/nav/navFlorish.svg"
import NavFlorishWithArc from "../assets/svg/nav/navFlorishWithArc.svg"
import LogoCircle from "../assets/svg/nav/logoCircle.svg"

import "../styles/nav.scss";

const Nav = () => {

    return(
        <nav className="desktopNav">
            <div className="navContainer">
                <ul className="navLeft">
                    <Link to="/schedule"><li>
                        Schedule
                    </li></Link>
                    <Link to="/deliverables"><li>
                        Deliverables
                    </li></Link>
                    <Link to="/people"><li>
                        People
                    </li></Link>
                </ul>

                <div className="center">
                    <div className="navFlorish">
                        <NavFlorish/>
                        <div></div>
                        <NavFlorishWithArc/>
                    </div>
                    <Link to="/" className="logo">
                        <LogoCircle/>
                    </Link>
                    <div className="navFlorish">
                        <NavFlorish/>
                        <div></div>
                        <NavFlorishWithArc/>
                    </div>
                </div>

                <ul className="navRight">
                    <Link to="/faq"><li>
                        FAQ
                    </li></Link>
                    <a href="https://www.instagram.com/scadstartup/" target="_blank"><li>
                        Instagram
                    </li></a>
                    <a href="https://forms.gle/x3XDcaPtxvhrPmGk6" target="_blank" className="signupButton"><li>
                        Sign Up
                    </li></a>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
