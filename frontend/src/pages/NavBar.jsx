import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.scss";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="btnhome">
        <Link className="Home" to="/">
          Home
        </Link>
      </div>
      <div className="btnpanier">
        <Link className="Basket" to="/BasketPage">
          Panier
        </Link>
      </div>
      <div className="btncontact">
        <Link className="ContactBtn" to="/ContactForm">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
