import React from "react";
import "../Styles/Header.scss";

// function Header() {
//   return (
//     <div>
//       <header className="header-container">
//         <div className="main-title">
//           <div className="logo">
//           <img src="https://media.discordapp.net/attachments/1105773595063488605/1106323132467388456/maison_hantee.jpg" alt="Logo maison hantée"/>
//           </div>
//           <h2 className="header-title">LES VACANCES DE L'HORREUR</h2>
//         </div>
//       </header>
//     </div>

//   );
// }

function Header() {
  return (
    <div className="Header">
      <img
        src="https://media.discordapp.net/attachments/1105773595063488605/1106323132467388456/maison_hantee.jpg"
        alt="Logo maison hantée"
      />
      <h1>Les vacances de l'horreur</h1>
    </div>
  );
}

export default Header;
