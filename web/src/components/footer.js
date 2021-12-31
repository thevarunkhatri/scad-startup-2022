import React from "react";
import { Link } from "gatsby"

import "../styles/footer.scss";

const Footer = () => {

    return(
        <footer>
            <div className="footerContainer">

                <ul className="footerLeft">
                     <Link to=""><li>
                       <img src={"https://placeholder.pics/svg/60/75F3FF"}></img>
                    </li></Link>
                    <Link to=""><li>
                       <img src={"https://placeholder.pics/svg/60/75F3FF"}></img>
                    </li></Link>
                    <Link to=""><li>
                       {/* <img src={"https://placeholder.pics/svg/60/75F3FF"}></img> */}
                    </li></Link>
                </ul>

                <Link to="/">
                    <h3>StartUp</h3>
                </Link>

                <ul className="footerRight">
                    <Link to=""><li>
                       <img src={"https://placeholder.pics/svg/60/75F3FF"}></img>
                    </li></Link>
                    <Link to=""><li>
                        <img src={"https://placeholder.pics/svg/60/75F3FF"}></img>
                    </li></Link>
                    <button class="footerButton">Sign up &nbsp; {String.fromCharCode(10230)}</button>
                </ul>
                
            </div>
        </footer>
    );
};

export default Footer;
