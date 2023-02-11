import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, cartItemToAdd) => {
  const cartItemToAddExists = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );

  if (cartItemToAddExists) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem && existingCartItem.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToClear.id
  );

  if (existingCartItem)
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const ShopCartContext = createContext({
  shopCartToggle: false,
  setShopCartToggle: () => {},
  cartItems: [],
  addItemToCart: () => [],
  removeItemFromCart: () => [],
  clearItemFromCart: () => [],
  countCartItems: 0,
  checkoutTotal: 0,
});

export const ShopCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [shopCartToggle, setShopCartToggle] = useState(false);
  const [countCartItems, setCountCartItems] = useState(0);
  const [checkoutTotal, setCheckoutTotal] = useState(0);

  const addItemToCart = (cartItemToAdd) =>
    setCartItems(addCartItem(cartItems, cartItemToAdd));

  const removeItemFromCart = (cartItemToRemove) =>
    setCartItems(removeCartItem(cartItems, cartItemToRemove));

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  useEffect(() => {
    const newCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    const checkoutTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    setCountCartItems(newCount);
    setCheckoutTotal(checkoutTotal);
  }, [cartItems]);

  return (
    <ShopCartContext.Provider
      value={{
        shopCartToggle,
        setShopCartToggle,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        countCartItems,
        checkoutTotal,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};
