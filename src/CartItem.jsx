import ItemQuantity from "./ItemQuantity";
export default function CartItem({ plant, addToCart, removeFromCart }) {
  return (
    <li className="cart-item">
      <div>
        {plant.image}
        {plant.name}
      </div>
      <ItemQuantity
        quantity={plant.quantity}
        addToCart={() => addToCart(plant)}
        removeFromCart={() => removeFromCart(plant)}
      />
    </li>
  );
}
