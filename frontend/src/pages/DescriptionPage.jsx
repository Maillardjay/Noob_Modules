import React from "react";
import { useParams } from "react-router-dom";
import HouseCardDesc from "../components/HouseCardDesc";
import haunteds from "../data/Data";
import "../Styles/DescriptionPage.scss";

function DescriptionPage() {
  const { id } = useParams();
  const haunted = haunteds.find((haunt) => haunt.id === +id);
  return (
    <div>
      <HouseCardDesc haunted={haunted} />
    </div>
  );
}

export default DescriptionPage;
