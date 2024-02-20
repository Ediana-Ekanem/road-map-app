import React from "react";
import Container from "../Container";
import { LuPlaySquare } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-[#E8ECEF] py-10 ">
      <Container>
        <div className=" md:flex justify-around md:space-x-10 font-[Poppins] ">
          <div>
            <p className="font-semibold mb-5">3legant.</p>
            <div className="text-[14px]">
              <p>43111 Hai Trieu street,</p>
              <p>District 1, HCMC</p>
              <p>Vietnam</p>
              <p className="mt-3">84-756-3237</p>
            </div>
            <div className="flex space-x-3 mt-3 items-center">
              <div className="w-4 h-4">
                <img
                  src="/icons/footerIcons/instagram.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-5 h-5">
                <img
                  src="/icons/footerIcons/facebook.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <LuPlaySquare />
              </div>
            </div>
            <div className=" md:hidden border-b-2 border-[#c9ced0] w-full  my-10 "></div>
          </div>
          <div>
            <p className="font-bold mb-5">Page</p>
            <div className="space-y-3 text-[14px]">
              <p>Home</p>
              <p>Shop</p>
              <p>Product</p>
              <p>Articles</p>
              <p>Contact Us</p>
            </div>
            <div className=" md:hidden border-b-2 border-[#c9ced0] w-full  my-10 "></div>
          </div>
          <div>
            <p className="font-bold mb-5">Info</p>
            <div className="space-y-3 text-[14px]">
              <p>Shipping Policy</p>
              <p>Return & Refund</p>
              <p>Support</p>
              <p>FAQs</p>
            </div>
            <div className=" md:hidden border-b-2 border-[#c9ced0] w-full  my-10 "></div>
          </div>
          <div>
            <div className="w-[352px]">
              <p className="font-bold mb-5 ">Join Newsletter</p>
              <p className="text-[14px]">
                Subscribe our newsletter to get more deals, new products and
                promotions
              </p>

              <div className="relative">
                <input
                  type="text"
                  name=""
                  id=""
                  className=" rounded-3xl text-[12px] px-3 py-2 mt-5 w-[250px] bg-transparent border-2 border-gray-300"
                  placeholder="Enter your Email"
                />
                <div className="rounded-full w-6 h-6 bg-[#377dff] px-1 py-1 absolute md:bottom-[6px]  bottom-[48px] left-[220px]">
                  <img
                    src="/icons/footerIcons/Line.png"
                    alt=""
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className=" md:hidden border-b-2 border-[#c9ced0] w-full  my-10 "></div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-12">
          <div className="hidden md:block border-b-2 border-[#c9ced0]  mt-5 px-[200px] "></div>
        </div>

        <div className=" flex flex-col md:flex-row  md:justify-between px-12 mt-5  items-center  text-[10px] md:text-[15px] text-center md:text-start">
          <div className="one order-2 md:order-1 ">
            <div className=" flex flex-col md:flex-row md:flex md:space-x-5">
              <div className="order-2 md:order-1">
                <p>Copyright © 2023 3legant. All rights reserved</p>
              </div>
              <div className=" md:order-2 hidden md:block border-l-2 border-[#c9ced0] "></div>
              <div className="s order-1 md:order-3 block md:flex md:space-x-5 text-center md:text-start">
                <p className="mb-3 md:mb-0">
                  Privacy Policy
                  <span className="ms-5">Terms & Conditions </span>
                </p>
              </div>
            </div>
          </div>
          <div className=" two md:mt-3 order-1 md:order-2  ">
            <div className="  flex space-x-2 items-center">
              <div className="w-10 h-10">
                <img
                  src="/icons/footerIcons/Payment Methods.png"
                  className=""
                  alt=""
                />
              </div>

              <div className="w-10 h-10 mt-3">
                <img
                  src="/icons/footerIcons/Group 63.png"
                  className=""
                  alt=""
                />
              </div>
              <div className="w-10 h-10 mt-3">
                <img
                  src="/icons/footerIcons/Mastercard.png"
                  className=""
                  alt=""
                />
              </div>
              <div className="w-10 h-10 mt-3">
                <img
                  src="/public/icons/footerIcons/Stripe.png"
                  className=""
                  alt=""
                />
              </div>
              <div className="w-10 h-10">
                <img
                  src="/icons/footerIcons/Payment Methods (1).png"
                  className=""
                  alt=""
                />
              </div>
              <div className="w-10 h-10">
                <img
                  src="/icons/footerIcons/Payment Methods (2).png"
                  className=""
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
