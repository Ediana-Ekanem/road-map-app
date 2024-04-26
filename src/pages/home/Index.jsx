import Header from "../../components/homeSections/Header";
import TrendingBrands from "../../components/homeSections/TrendingBrands";
import Categories from "../../components/homeSections/Categories";
import JustIn from "../../components/homeSections/JustIn";
import BestSeller from "../../components/homeSections/BestSeller";
import Footer from "../../components/homeSections/Footer";
import NewsFeed from "../../components/NewsFeed";
import { useContext } from "react";
import { CartContext } from "../../store/CartProvider";
import Modal from "../../components/Modal";

function Index() {
  const { cart, setCart, warning, setWarning, showModal, setShowModal } =
    useContext(CartContext);

  const handleClick = (item) => {
    // check if added or not
    let isPresent = false; //This variable will be used to track whether the item is already present in the cart.
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleCount = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });

    const tempArr = cart;
    tempArr[ind].numAvailable += d;
    if (tempArr[ind].numAvailable === 0) tempArr[ind].numAvailable = 1;
    setCart([...tempArr]);
  };
  return (
    <>
      <Header setShowModal={setShowModal} />
      <div className="relative top-0 ">
        {warning && (
          <div className="bg-orange-500 text-white text-center p-4 rounded-lg shadow-md z-20 fixed font-bold top-0 right-0 w-96">
            <h1> Item is already added to your cart</h1>
          </div>
        )}
      </div>

      {showModal && <Modal handleCount={handleCount} />}
      <TrendingBrands />
      <JustIn handleClick={handleClick} />
      <Categories />
      <BestSeller handleClick={handleClick} />
      <NewsFeed />
      <Footer />
    </>
  );
}

export default Index;
