import React from "react";
import { Link } from "gatsby";
import Arrow from "../assets/svg/arrow.svg"
import Instagram from "../assets/svg/footer/Instagram.svg"
import Discord from "../assets/svg/footer/Discord.svg"

import "../styles/cta.scss";

const CTA = () => {

    return(
        <div className="cta">
            <div className="ctaCard signup">
                <h4>Excited? Sign up now!</h4>
                <a href="https://forms.gle/x3XDcaPtxvhrPmGk6" target="_blank">
                    Sign Up
                    <Arrow/>
                </a>
            </div>
            <div className="ctaCard contact">
                <h4>Questions? Reach out!</h4>
                <div className="links">
                    <a href="https://www.instagram.com/scadstartup/" target="_blank">
                        <Instagram/>
                    </a>
                    <a href="https://discord.gg/D4AFxAwwp6" target="_blank">
                        <Discord/>
                    </a>
                    <div className="line"/>
                </div>
            </div>
        </div>
    );
};

export default CTA;
