import React from "react";
import "../Styles/Header.scss";

function Header() {
  return (
    <div className="Header">
      <img
        className="logo"
        src="https://cdn.discordapp.com/attachments/1090942510962065428/1106546682382008430/logo.png"
        alt="Logo fantome"
      />
      <h1>Les vacances de l'horreur</h1>
    </div>
  );
}

export default Header;
