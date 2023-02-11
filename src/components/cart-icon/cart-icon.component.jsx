import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { ShopCartContext } from "../../contexts/shop-cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { shopCartToggle, setShopCartToggle, countCartItems } =
    useContext(ShopCartContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => setShopCartToggle(!shopCartToggle)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{countCartItems}</span>
    </div>
  );
};

export default CartIcon;
