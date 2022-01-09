import React from "react";
import { Link } from "gatsby"
import NavFlorish from "../assets/svg/nav/navFlorish.svg"
import NavFlorishWithArc from "../assets/svg/nav/navFlorishWithArc.svg"
import LogoCircle from "../assets/svg/nav/logoCircle.svg"

import "../styles/nav.scss";

const Nav = () => {

    return(
        <nav>
            <div className="navContainer">
                <ul className="navLeft">
                    <Link to="/schedule"><li>
                        Schedule
                    </li></Link>
                    <Link to="/"><li>
                        People
                    </li></Link>
                    <Link to="/deliverables"><li>
                        Deliverables
                    </li></Link>
                </ul>

                <div className="center">
                    <div className="navFlorish">
                        <NavFlorish/>
                        <div></div>
                        <NavFlorishWithArc/>
                    </div>
                    <Link to="/">
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
                    <a href="/" target="_blank"><li>
                        Instagram
                    </li></a>
                    <a href="/" target="_blank" className="signupButton"><li>
                        Sign Up
                    </li></a>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
