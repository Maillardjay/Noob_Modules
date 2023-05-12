import React from "react";

function HouseCard({ haunted }) {
  return (
    <>
      <div className="card-header">
        <div className="card-img">
          <img src={haunted.image} alt="haunted-img" />
        </div>
      </div>
      <div className="card-Body">
        <h2 className="card-title">{haunted.title}</h2>
        <p>Rating: {haunted.note}</p>
        <p>Booking: {haunted.price}€</p>
      </div>
    </>
  );
}

export default HouseCard;
