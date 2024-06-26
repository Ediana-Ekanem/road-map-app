import React from "react";
import Container from "../Container";
import { Data } from "../data/NewArrivals";
import { ProductCard } from "../ProductCard";

const BestSeller = ({ handleClick }) => {
  return (
    <>
      <div className="py-20">
        <Container>
          <div className="mt-5">
            <h1 className="text-[40px] font-bold text-center mb-5">
              Best Seller
            </h1>
            <div className="grid grid-cols-4 ps-10 border-1 overflow-x-auto border-red-400">
              {Data.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  handleClick={handleClick}
                  // image={item.image}
                  // title={item.title}
                  // type={item.type}
                  // amount={item.amount}
                  // cartButton={item.cartButton}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BestSeller;
