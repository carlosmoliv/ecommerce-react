import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, product) => {
  const productExists = cartItems.find((item) => item.id === product.id);

  if (productExists) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

export const ShopCartContext = createContext({
  shopCartToggle: false,
  setShopCartToggle: () => {},
  cartItems: [],
  addItemToCart: () => [],
  countCartItems: 0,
});

export const ShopCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [shopCartToggle, setShopCartToggle] = useState(false);
  const [countCartItems, setCountCartItems] = useState(0);

  const addItemToCart = (product) => {
    setCountCartItems(countCartItems + 1);
    setCartItems(addCartItem(cartItems, product));
  };

  useEffect(() => {
    const newCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <ShopCartContext.Provider
      value={{
        shopCartToggle,
        setShopCartToggle,
        cartItems,
        addItemToCart,
        countCartItems,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};
