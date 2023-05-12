import React from "react";
import haunteds from "../data/Data";

function HouseCardDesc({ haunted }) {
  return (
    <>
      <div className="card-header">
        <div className="card-img">
          <img src={haunted.image} alt="haunted-img" />
        </div>
      </div>
      <div className="card-Body">
        <h2 className="card-title">{haunted.title}</h2>
        <p className="card-description">{haunted.description}</p>
      </div>
    </>
  );
}

export default HouseCardDesc;
