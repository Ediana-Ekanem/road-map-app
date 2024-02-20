import React from "react";
import { ProductCard } from "../ProductCard";
import { Data } from "../../NewArrivals";
import Container from "../Container";

const JustIn = () => {
  return (
    <div>
      <Container>
        <h2 className="font-bold text-3xl mt-5 mb-10">Just In</h2>
        <div className="flex space-x-5 overflow-x-auto whitespace-no-wrap">
          {Data.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              type={item.type}
              amount={item.amount}
              // cartButton={item.cartButton}
              justIn={true}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
export default JustIn;
