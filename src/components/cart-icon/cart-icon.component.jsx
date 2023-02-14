import { useContext } from "react";

import { ShopCartContext } from "../../contexts/shop-cart.context";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.js";

const CartIcon = () => {
  const { shopCartToggle, setShopCartToggle, countCartItems } =
    useContext(ShopCartContext);

  return (
    <CartIconContainer onClick={() => setShopCartToggle(!shopCartToggle)}>
      <ShoppingIcon />
      <ItemCount>{countCartItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
