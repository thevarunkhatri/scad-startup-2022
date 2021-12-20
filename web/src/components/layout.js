import React from "react";

import "../styles/layout.scss";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <div>{children}</div>
  </>
);

export default Layout;
