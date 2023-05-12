import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import haunteds from "../data/Data";
import HouseCard from "../components/HouseCard";

function HomePage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All");
  const [city, setCity] = useState("All");
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const uniqueCountries = [
      ...new Set(haunteds.map((haunted) => haunted.Country)),
    ];
    const uniqueCities = [...new Set(haunteds.map((haunted) => haunted.City))];
    setCountries(uniqueCountries);
    setCities(uniqueCities);
  }, []);

  return (
    <div className="filters">
      <input
        type="text"
        className="search-input"
        placeholder="🔎 Type to search"
        id="searchInput"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <select
        className="select"
        name="Country"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      >
        <option value="All">All</option>
        {countries.map((countryOption) => (
          <option key={countryOption} value={countryOption}>
            {countryOption}
          </option>
        ))}
      </select>
      <select
        className="select"
        name="City"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      >
        <option value="All">All</option>
        {cities.map((cityOption) => (
          <option key={cityOption} value={cityOption}>
            {cityOption}
          </option>
        ))}
      </select>

      <section className="cards">
        {haunteds
          .filter((haunted) => {
            return (
              haunted.title.toLowerCase().includes(search.toLowerCase()) &&
              (country === "All" || haunted.Country === country) &&
              (city === "All" || haunted.City === city)
            );
          })
          .map((haunted) => (
            <Link to={`/description/${haunted.id}`} key={haunted.id}>
              <HouseCard haunted={haunted} />
            </Link>
          ))}
      </section>
    </div>
  );
}

export default HomePage;
