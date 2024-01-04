import React from "react";
import Container from "../Container";

const TrendingBrands = () => {
  return (
    <div className="my-10">
      <Container>
        <h1 className="text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose text-center">
          Tending Brands
        </h1>
        <div className="flex space-x-5 justify-center items-center ">
          <img src="/icons/logo 01.png" alt="" />
          <img src="/icons/logo 02.png" alt="" />
          <img src="/icons/logo 03.png" alt="" />
          <img src="/icons/logo 04.png" alt="" />
          <img src="/icons/logo 05.png" alt="" />
          <img src="/icons/logo 6.png" alt="" />
        </div>
      </Container>
    </div>
  );
};

export default TrendingBrands;
