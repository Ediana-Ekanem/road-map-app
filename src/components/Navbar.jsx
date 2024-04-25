import React, { useContext, useState } from "react";
import logo from "/icons/3legant..png";
import arrowDown from "/icons/chevron-down.png";
import searchIcon from "/icons/search.png";
import userProfileIcon from "/icons/user-circle.png";
import cartIcon from "/icons/shopping bag.png";
import Container from "./Container";
import { CartContext } from "../store/CartProvider";

function Navbar({ size }) {
  const { setShowModal } = useContext(CartContext);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="bg-white py-6 font-[Space Grotesk] shadow sticky top-0 z-[1000] ">
        <Container>
          <nav className="flex px-10 md:px-0 justify-between items-center">
            <span
              className="icon md:hidden text-3xl cursor-pointer"
              onClick={toggleMenu}
            >
              <ion-icon name={showMenu ? "close" : "menu"}></ion-icon>
            </span>
            <div className="mr-20 w-[70px] lg:w-[100px] ">
              <img className="w-full" src={logo} alt="Logo" />
            </div>
            <div
              className={`nav-links ${
                showMenu ? "" : "hidden"
              } md:block duration-200 md:static absolute mt-[60px] rounded bg-white shadow-md md:shadow-none px-[50px]  md:mt-0 md:mr-6 py-7 md:py-0 md:my-0 md:min-h-fit min-h-[30vh] left-0 top-[9%] flex items-center`}
            >
              <ul className="flex md:flex-row flex-col md:items-center space-x-10 space-y-8 md:space-y-0 font-[Space Grotesk]">
                <li className="ml-[40px]">
                  <a className="hover:text-blue-500 text-[16px]" href="#">
                    Home
                  </a>
                </li>
                <li className="flex items-center">
                  <a className="hover:text-blue-500 text-[16px]" href="#">
                    Shop
                  </a>
                  <img
                    className="w-4 mt-1"
                    src={arrowDown}
                    alt="dropdown-icon"
                  />
                </li>
                <li className="flex items-center">
                  <a className="hover:text-blue-500 text-[16px]" href="#">
                    Product
                  </a>
                  <img
                    className="w-4 mt-1"
                    src={arrowDown}
                    alt="dropdown-icon"
                  />
                </li>
                <li>
                  <a className="hover:text-blue-500 text-[16px]" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex space-x-3 items-center">
              <div className="w-5 hidden md:flex">
                <img className="w-full" src={searchIcon} alt="search Icon" />
              </div>
              <div className="w-5 hidden md:flex">
                <img
                  className="w-full"
                  src={userProfileIcon}
                  alt="user-profile Icon"
                />
              </div>
              <div
                className="w-5 h-5 relative flex items-center space-x-2"
                onClick={() => setShowModal(true)}
              >
                <img
                  className="w-full h-full object-cover"
                  src={cartIcon}
                  alt="cart Icon"
                />
                <span className=" flex items-center justify-center text-[10px] text-white bg-black w-5 h-5  rounded-full font-bold absolute  left-4">
                  {size}
                </span>
              </div>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Navbar;
