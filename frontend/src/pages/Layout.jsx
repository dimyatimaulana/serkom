import React from "react";
import Navbar from "../components/Navbar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return(
    <React.Fragment>
      <Navbar />
      <main>
        { children }
      </main>
    </React.Fragment>
  );
}

export default Layout;