import { useContext } from "react";
import { CartContext } from "../../contexts/shop-cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
  BaseSpan,
  Quantity,
  QuantityArrow,
} from "./checkout-item.styles.js";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const handleAddItem = () => addItemToCart(cartItem);
  const handleRemoveItem = () => removeItemFromCart(cartItem);
  const handleClearItem = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>

      <BaseSpan>{name}</BaseSpan>

      <Quantity>
        <QuantityArrow className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </QuantityArrow>

        <span>{quantity}</span>

        <QuantityArrow className="arrow" onClick={handleAddItem}>
          &#10095;
        </QuantityArrow>
      </Quantity>

      <BaseSpan>{price}</BaseSpan>

      <RemoveButton onClick={handleClearItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
