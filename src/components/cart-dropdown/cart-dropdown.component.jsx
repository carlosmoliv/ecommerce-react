import { useContext } from "react";

import { ShopCartContext } from "../../contexts/shop-cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(ShopCartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem cartItem={item} key={item.id} />;
        })}
      </div>

      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
