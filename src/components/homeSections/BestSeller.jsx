import React from "react";
import Container from "../Container";
import { Data } from "../../NewArrivals";
import { ProductCard } from "../ProductCard";

const BestSeller = () => {
  return (
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
                image={item.image}
                title={item.title}
                type={item.type}
                amount={item.amount}
                cartButton={item.cartButton}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BestSeller;
