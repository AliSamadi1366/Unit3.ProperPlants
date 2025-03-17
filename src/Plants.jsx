import { useState } from "react";
import PLANTS from "./data.js";
import PlantCart from "./plantCart.jsx";
export default function Plants({ addToCart }) {
  const [plants] = useState(PLANTS);
  return (
    <>
      <section className="plants">
        <h1>Plants</h1>
        <ul>
          {plants.map((plant) => (
            <PlantCart key={plant.id} plant={plant} addToCart={addToCart} />
          ))}
        </ul>
      </section>
    </>
  );
}
