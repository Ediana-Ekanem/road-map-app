import React from "react";
import Button from "./shared/button";

export const ProductCard = ({
  image,
  title,
  type,
  amount,
  cartButton,
  justIn,
}) => {
  return (
    <div className="relative h-[500px] mt-8 mb-24 rounded-lg hover:shadow-2xl hover:scale-105 transition">
      <p className=" bg-white text-sm rounded absolute top-3 left-3 px-2 font-semibold">
        New
      </p>

      <div className=" w-[250px]">
        <div className="aspect-[4/5]">
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={image}
            alt="category image"
          />
        </div>
        <div className="px-2 py-4 h-full">
          <p className="font-semibold text-xl">${amount}</p>
          <p className="font-medium text-gray truncate">{title}</p>
          <div className="flex space-x-1 my-2">
            <img src="/icons/Star Fill.png" alt="star icon" />
            <img src="/icons/Star Fill.png" alt="star icon" />
            <img src="/icons/Star Fill.png" alt="star icon" />
            <img src="/icons/Star Fill.png" alt="star icon" />
            <img src="/icons/Star Fill.png" alt="star icon" />
          </div>
          <p className="font-semibold text-sm">{type}</p>
          <Button
            width={"md"}
            color="black"
            isRounded="md"
            className="mt-2 absolute bottom-4 left-0 right-0 mx-auto"
            onClick={() => console.log("You clicked me")}
            loading={false}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
