import React from "react";
import { ProductCard } from "../ProductCard";
import { Data } from "../data/NewArrivals.js";
import Container from "../Container";

const JustIn = ({ handleClick }) => {
  return (
    <>
      <Container>
        <h2 className="font-bold text-3xl mt-5 mb-10">Just In</h2>
        <div className="flex space-x-8 overflow-x-auto whitespace-no-wrap px-4">
          {Data.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              handleClick={handleClick}
              // onClick={onClick}
              // image={item.image}
              // title={item.title}
              // type={item.type}
              // amount={item.amount}

              // cartButton={item.cartButton}
              // justIn={true}
            />
          ))}
        </div>
      </Container>
    </>
  );
};
export default JustIn;
