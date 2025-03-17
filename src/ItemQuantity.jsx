export default function ItemQuantity({ quantity, addToCart, removeFromCart }) {
  return (
    <div className="cart-item-quantity">
      <button onClick={() => removeFromCart()}> - </button>
      <span>{quantity}</span>
      <button onClick={() => addToCart()}> + </button>
    </div>
  );
}
