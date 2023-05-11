import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/page1">Page1</Link>
      <Link to="/ContactForm">contactUs</Link>
    </div>
  );
}

export default NavBar;
