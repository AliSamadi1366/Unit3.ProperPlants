import CartItem from "./CartItem";

export default function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((plant) => (
          <CartItem
            key={plant.id}
            plant={plant}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
    </section>
  );
}
