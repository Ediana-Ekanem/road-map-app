import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CartContext } from "../store/CartProvider";
import { MdClose } from "react-icons/md";

const Modal = ({ handleCount }) => {
  const { cart, setCart, setShowModal } = useContext(CartContext);
  const [amount, setAmount] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.numAvailable * item.amount));
    setAmount(ans);
  };

  const handleRemove = (id) => {
    const updateCart = cart.filter((item) => item.id !== id);
    setCart(updateCart);
    handlePrice();
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  const handleModalClick = (e) => {
    // Prevent the modal from closing when clicking inside it
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center mt-10  "
      onClick={() => setShowModal(false)}
    >
      <div
        className="w-full max-w-[46%] bg-white shadow-xl rounded-xl py-5 px-5 fixed z-[999] overflow-y-auto max-h-[70vh]  "
        onClick={handleModalClick}
      >
        <span className="flex justify-end me-5">
          <MdClose
            size={25}
            className="text-red-500 mb-14"
            onClick={() => setShowModal(false)}
          />
        </span>
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-7 border-b  border-gray-300 mb-5 pb-5"
          >
            <div className="w-36 h-20 ">
              <img
                src={item.image}
                alt={item.id}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold">{item.title}</p>
            <div className="flex ">
              <button
                className="border border-gray-300 text-xl py-1 px-3 rounded font-extrabold"
                onClick={() => handleCount(item, +1)}
              >
                +
              </button>
              <button className="border border-gray-300 text-xl  py-1 px-3 rounded  font-semibold">
                {item.numAvailable}
              </button>
              <button
                className="border border-gray-300 text-xl py-1 px-3 rounded  font-extrabold"
                onClick={() => handleCount(item, -1)}
              >
                -
              </button>
            </div>

            <div className=" flex  flex-col items-center space-y-3">
              <div>
                <span className="bg-slate-500 text-white rounded px-2 py-1 font-semibold ">
                  ${item.amount},00
                </span>
              </div>
              <button
                className="rounded font-bold bg-red-500 py-1 px-3 text-white"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className=" text-center space-x-5 text-xl py-3">
          <span className=" font-bold">Total Price of your Cart</span>
          <span className="text-green-500 font-bold">₦ - {amount}</span>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
