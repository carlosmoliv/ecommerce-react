import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import {
  ShopCartToggleContext,
  ShopCartItemsContext,
} from "../../contexts/shop-cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const { items, setItems } = useContext(ShopCartItemsContext);
  const { shopCartToggle, setShopCartToggle } = useContext(
    ShopCartToggleContext
  );

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <span
            className="nav-link"
            onClick={() => setShopCartToggle(!shopCartToggle)}
          >
            <CartIcon />
          </span>
        </div>

        {shopCartToggle && <CartDropdown />}
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
