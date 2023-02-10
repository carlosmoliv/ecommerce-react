import { createContext, useState } from "react";

export const ShopCartToggleContext = createContext({
  shopCartToggle: false,
  setShopCartToggle: () => false,
});

export const ShopCartItemsContext = createContext({
  items: [],
  setItems: () => [],
});

export const ShopCartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [shopCartToggle, setShopCartToggle] = useState(false);

  return (
    <ShopCartToggleContext.Provider
      value={{ shopCartToggle, setShopCartToggle }}
    >
      <ShopCartItemsContext.Provider value={{ items, setItems }}>
        {children}
      </ShopCartItemsContext.Provider>
    </ShopCartToggleContext.Provider>
  );
};
