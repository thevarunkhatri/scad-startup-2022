import React from "react";
import Nav from './nav'
import Footer from './footer'

import "../styles/layout.scss";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Nav/>
    <div className="navSpacer">
      {children}
    </div>
    <Footer/>
  </>
);

export default Layout;
