import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilmDescCard from "../components/PlaceDescCard";

function DescriptionPage({ setReservationId, setPriceBasket }) {
  const { id } = useParams();
  const [oneFilm, setOneFilm] = useState([]);
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
    <FilmDescCard
      film={oneFilm}
      setReservationId={setReservationId}
      setPriceBasket={setPriceBasket}
    />
  );
}

export default DescriptionPage;
