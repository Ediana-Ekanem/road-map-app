import React from "react";

const JustInProp = ({ image, title, type, amount }) => {
  return (
    <div className="relative">
      <div>
        <p className=" bg-white rounded absolute top-3 left-3 px-2 font-bold">
          New
        </p>
      </div>

      <div className="flex flex-col  space-y-2 w-[250px]">
        <div className="w-[230px] h-[349px]">
          <img className="w-full h-full" src={image} alt="category image" />
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

export default JustInProp;
