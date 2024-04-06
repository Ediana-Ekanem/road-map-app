import React from "react";
import { ProductCard } from "../ProductCard";
import { Data } from "../../NewArrivals";
import Container from "../Container";

const JustIn = () => {
  return (
    <div>
      <Container>
        <h2 className="font-bold text-3xl mt-5 mb-10">Just In</h2>
        <div className="flex space-x-8 overflow-x-auto whitespace-no-wrap px-4">
          {Data.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              type={item.type}
              amount={item.amount}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
export default JustIn;
