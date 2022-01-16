import React from "react";
import { Link } from "gatsby"
import Flux from "../assets/svg/footer/FLUX.svg"
import Scadpro from "../assets/svg/footer/SCADpro.svg"
import Instagram from "../assets/svg/footer/Instagram.svg"
import Discord from "../assets/svg/footer/Discord.svg"

import "../styles/footer.scss";

const Footer = () => {

    return(
        <footer>
            <div className="footerContainer">

                <ul className="footerLeft">
                    <Link to=""><li>
                        <Flux/>
                    </li></Link>
                    <Link to=""><li>
                        <Scadpro/>
                    </li></Link>
                </ul>

                <div className="footerLogo">
                    <Link to="/">
                        <h3>StartUp</h3>
                    </Link>
                </div>

                <ul className="footerRight">
                    <Link to=""><li>
                       <Instagram/>
                    </li></Link>
                    <Link to=""><li>
                        <Discord/>
                    </li></Link>
                    <button class="footerButton">Sign up &nbsp; {String.fromCharCode(10230)}</button>
                </ul>

            </div>
        </footer>
    );
};

export default Footer;
