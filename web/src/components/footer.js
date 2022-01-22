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
                    <Link to="https://www.instagram.com/scadstartup/"  target="_blank" ><li>
                       <Instagram/>
                    </li></Link>
                    <Link to="https://discord.gg/D4AFxAwwp6" target="_blank" ><li>
                        <Discord/>
                    </li></Link>
                    <Link to="https://forms.gle/x3XDcaPtxvhrPmGk6" target="_blank">
                        <button class="footerButton">Sign up &nbsp; {String.fromCharCode(10230)}</button>
                    </Link>
                </ul>

            </div>
        </footer>
    );
};

export default Footer;
