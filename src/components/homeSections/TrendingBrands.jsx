import React from "react";
import Container from "../Container";

const TrendingBrands = () => {
  const brandImgs = [
    {
      id: 1,
      image: "icons/logo 01.png",
    },
    {
      id: 2,
      image: "/icons/logo 02.png",
    },
    {
      id: 3,
      image: "/icons/logo 03.png",
    },
    {
      id: 4,
      image: "icons/logo 04.png",
    },
    {
      id: 5,
      image: "/icons/logo 05.png",
    },
    {
      id: 6,
      image: "/icons/logo 6.png",
    },
  ];
  return (
    <div className="my-10">
      <Container>
        <h1 className="text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose text-center">
          Tending Brands
        </h1>

        <div className="flex space-x-5 justify-center items-center overflow-x-auto whitespace-no-wrap ">
          {brandImgs.map((item, index) => (
            <img key={item.id} src={item.image} alt={`Brand ${index + 1}`} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TrendingBrands;
