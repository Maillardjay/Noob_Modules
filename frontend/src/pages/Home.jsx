import React, { useEffect, useState } from "react";

function Home() {
  const [meteos, setMeteos] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=nantes&units=metric&APPID=be2ca3b8b2cc729c8268e5b846ba6853"
    )
      .then((res) => res.json())
      .then((data) => setMeteos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <header className="header-container">
        <div className="main-title">
          <h2 className="header-title">LES VACANCES DE L'HORREUR</h2>
        </div>
      </header>
    </div>
  );
}

export default Home;
