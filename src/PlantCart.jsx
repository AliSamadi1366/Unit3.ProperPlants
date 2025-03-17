export default function PlantCart({ plant, addToCart }) {
  return (
    <li className="plant">
      <figure>{plant.image}</figure>
      <p>{plant.name}</p>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </li>
  );
}
