import React, { useState } from "react";
import BasketContainer from "../components/BasketContainer";

function BasketPage({ reservationId, priceBasket }) {
  const [buy, setBuy] = useState("Buy");
  return (
    <div>
      <div className="basket-page">
        <h2 className="basket-page-title"> Panier </h2>
        <div className="basket-page-orga">
          {reservationId.map((film) => (
            <BasketContainer film={film} />
          ))}
        </div>
        <h2 className="basket-page-total">Total {priceBasket} €</h2>
        <button
          type="button"
          className="basket-page-button"
          onClick={() => setBuy("Payment confirmed, Thank you !")}
        >
          {buy}{" "}
        </button>
      </div>
    </div>
  );
}

export default BasketPage;
