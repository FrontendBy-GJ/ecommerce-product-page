import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({
    product: '',
    qty: 0,
    price: null,
    total: null,
    image: null,
  });
  const [emptyCart, setEmptyCart] = useState(true);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, formatPrice, emptyCart, setEmptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
