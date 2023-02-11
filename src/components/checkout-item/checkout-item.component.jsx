import { useContext } from "react";
import "./checkout-item.styles.scss";

import { ShopCartContext } from "../../contexts/shop-cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(ShopCartContext);

  const handleAddItem = () => addItemToCart(cartItem);
  const handleRemoveItem = () => removeItemFromCart(cartItem);
  const handleClearItem = () => clearItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </div>

        <span>{quantity}</span>

        <div className="arrow" onClick={handleAddItem}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>

      <div className="remove-button" onClick={handleClearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
