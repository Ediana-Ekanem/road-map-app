import React from "react";

export const SubCategory = () => {
  const subCat = [
    {
      id: 1,
      title: " November Outfits",
      image: "/images/one.png",
    },
    {
      id: 2,
      title: " Cashmere Set",
      image: "images/two.png",
    },
    {
      id: 3,
      title: " The New Nordic",
      image: "images/three.png",
    },
    {
      id: 4,
      title: "The Leather",
      image: "images/four.png",
    },
  ];
  return (
    <div>
      <div className="flex  justify-center items-center space-x-1 mt-20">
        <div className="grid md:grid-cols-2 gap-2">
          {subCat.map((item) => (
            <div className="relative" key={item.id}>
              <img src={item.image} alt="" />
              <div className="absolute bottom-10  left-10 items-center">
                <h3 className="text-white font-semibold text-2xl">
                  {item.title}
                </h3>
                <div className="flex items-center border-b border-white w-[75px] space-x-1 ">
                  <img
                    className="w-[60px]"
                    src="/icons/Get started.png"
                    alt=""
                  />
                  <img className="w-4" src="/icons/arrow-right.png" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
