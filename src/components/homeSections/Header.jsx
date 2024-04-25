import Navbar from "../Navbar";
import Hero from "../Hero";
import { useContext } from "react";
import { CartContext } from "../../store/CartProvider";
function Header() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Navbar size={cart.length} />
      <Hero />
    </>
  );
}

export default Header;
