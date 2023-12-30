import React from "react";

export const SubCategory = () => {
  return (
    <div>
      <div className="flex  justify-center items-center space-x-1 mt-20">
        <div className="md:flex  md:space-x-5 mb-5">
          <div>
            <div className="relative">
              <img src="/images/one.png" alt="" />
              <div className="absolute bottom-10  left-10 items-center">
                <h3 className="text-white font-semibold text-2xl">
                  November Outfits
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
          </div>
          <div>
            <div className="relative mt-5">
              <img src="images/two.png" alt="" />
              <div className="absolute bottom-10 left-10 items-center">
                <h3 className="text-white font-semibold text-2xl">
                  Cashmere Set
                </h3>
                <div className="flex items-center border-b border-white w-[75px] space-x-1  ">
                  <img
                    className="w-[60px]"
                    src="/icons/Get started.png"
                    alt=""
                  />
                  <img className="w-4" src="/icons/arrow-right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end  */}
      <div className="flex justify-center items-center  ">
        <div className="md:flex  md:space-x-5 mb-5">
          <div>
            <div className="relative mb-5">
              <img src="images/three.png" alt="" />
              <div className="absolute bottom-10  left-10 items-center">
                <h3 className="text-white font-semibold text-2xl">
                  The New Nordic
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
          </div>
          <div>
            <div className="relative  mt-5">
              <img src="images/four.png" alt="" />
              <div className="absolute bottom-10 left-10 items-center">
                <h3 className="text-white font-semibold text-2xl">
                  The Leather
                </h3>
                <div className="flex items-center border-b border-white w-[75px] space-x-1  ">
                  <img
                    className="w-[60px]"
                    src="/icons/Get started.png"
                    alt=""
                  />
                  <img className="w-4" src="/icons/arrow-right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// import React, { useState } from "react";

// export const SubCategory = () => {
//   const [subCat, setSubCat] = useState([
//     { id: 1, img: "/images/one.png", title: "November Outfits" },
//     { id: 2, img: "/images/two.png", title: "Cashmere Set" },
//     { id: 3, img: "/images/three.png", title: "The New Nordic" },
//     { id: 4, img: "/images/four.png", title: "The Leather" },
//   ]);
//   return (
//     <div>
//       <div className="flex justify-center items-center space-x-1">
//         {subCat.map((item) => (
//           <div key={item.id}>
//             <div>
//               <img src={item.img} alt="" />
//             </div>
//             {/* <div>
//               <img src="/images/one.png" alt="" />
//             </div> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
