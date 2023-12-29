import React, { useState } from "react";
import Container from "./Container";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="bg-white py-6 font-[Space Grotesk] shadow sticky top-0 ">
        <Container>
          <nav className="flex justify-between items-center  ">
            <span className="icon md:hidden" onClick={toggleMenu}>
              <ion-icon
                name={showMenu ? "close" : "menu"}
                className="text-3xl cursor-pointer"
              ></ion-icon>
            </span>
            <div className="mr-[180px] md:mr-0">
              <img className="w-13" src="/icons/3legant..png" alt="Logo" />
            </div>
            <div
              className={`nav-links ${
                showMenu ? "" : "hidden"
              } md:block duration-200 md:static absolute rounded bg-white shadow-md md:shadow-none px-[50px] mt- md:mt-0 md:mr-6 py-7 md:py-0 md:my-0 md:min-h-fit min-h-[40vh] left-0 top-[9%] flex items-center`}
            >
              <ul className="flex md:flex-row flex-col md:items-center space-x-10 space-y-10 md:space-y-0 font-[Space Grotesk]">
                <li className="ml-[40px]">
                  <a className="hover:text-blue-500" href="#">
                    Home
                  </a>
                </li>
                <li className="flex items-center">
                  <a className="hover:text-blue-500" href="#">
                    Shop
                  </a>
                  <img
                    className="w-4 mt-1"
                    src="/icons/chevron-down.png"
                    alt="dropdown-icon"
                  />
                </li>
                <li className="flex items-center">
                  <a className="hover:text-blue-500" href="#">
                    Product
                  </a>
                  <img
                    className="w-4 mt-1"
                    src="/icons/chevron-down.png"
                    alt="dropdown-icon"
                  />
                </li>
                <li>
                  <a className="hover:text-blue-500" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex space-x-3 items-center">
              <div className="w-5 hidden md:flex">
                <img
                  className="w-full"
                  src="/icons/search.png"
                  alt="search Icon"
                />
              </div>
              <div className="w-5 hidden md:flex">
                <img
                  className="w-full"
                  src="/icons/user-circle.png"
                  alt="user-profile Icon"
                />
              </div>
              <div className="w-10">
                <img
                  className="w-full"
                  src="/icons/Cart Button.png"
                  alt="cart Icon"
                />
              </div>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Navbar;
