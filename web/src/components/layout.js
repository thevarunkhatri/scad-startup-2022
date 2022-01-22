import React from "react";
import Nav from './nav'
import MobileNav from './mobileNav'
import Footer from './footer'

import "../styles/layout.scss";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Nav/>
    <MobileNav/>
    <div className="navSpacer">
      {children}
    </div>
    <Footer/>
  </>
);

export default Layout;
