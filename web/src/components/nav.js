import React from "react";
import { Link } from "gatsby"

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
                <Link to="/">
                    <h3>StartUp</h3>
                </Link>
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
