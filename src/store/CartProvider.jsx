import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // const [show, setShow] = useState(true);

  return (
    <CartContext.Provider
      value={{ cart, setCart, warning, setWarning, showModal, setShowModal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
