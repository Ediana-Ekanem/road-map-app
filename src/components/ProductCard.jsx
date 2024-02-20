import React from "react";
import CartButton from "./CartButton";

export const ProductCard = ({
  image,
  title,
  type,
  amount,
  cartButton,
  justIn,
}) => {
  return (
    <div className="relative mb-10">
      <div>
        <p className=" bg-white rounded absolute top-3 left-3 px-2 font-bold">
          New
        </p>
      </div>

      <div className="flex flex-col  space-y-2 w-[250px]">
        <div className="w-[230px] h-[349px]">
          <img
            className="w-full h-full object-cover  "
            src={image}
            alt="category image"
          />

          {/* Add Cart Button Here  */}
          {justIn && (
            <div class="flex justify-center">
              <CartButton />
            </div>
          )}
        </div>
        <div className="flex space-x-1">
          <img src="/icons/Star Fill.png" alt="star icon" />
          <img src="/icons/Star Fill.png" alt="star icon" />
          <img src="/icons/Star Fill.png" alt="star icon" />
          <img src="/icons/Star Fill.png" alt="star icon" />
          <img src="/icons/Star Fill.png" alt="star icon" />
        </div>
        <p className="font-semibold">{title}</p>
        <p className="font-semibold">{type}</p>
        <p className="font-semibold">${amount}</p>
      </div>
    </div>
  );
};
