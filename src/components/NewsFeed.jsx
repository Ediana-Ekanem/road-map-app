import React from "react";
import Container from "./Container";

const NewsFeed = () => {
  const newsFeedImgs = [
    {
      id: 1,
      img: "/images//newFeedImg/Image1.png",
    },
    {
      id: 2,
      img: "/images/newFeedImg/Image2.png",
    },
    {
      id: 3,
      img: "/images/newFeedImg/Image3.png",
    },
    {
      id: 4,
      img: "/images/newFeedImg/Paste image.png",
    },
  ];
  const newsFeedData = [
    {
      img: "/images//newFeedImg/Image1.png",
      icon: "/icons/newFeedIcons/Vector.png",
      title: "Free Shipping",
      sub: "Order above $200",
    },
    {
      img: "/images/newFeedImg/Image2.png",
      icon: "/icons/newFeedIcons/money.png",
      title: "Money-back",
      sub: "30 days guarantee",
    },
    {
      img: "/images/newFeedImg/Image3.png",
      icon: "/icons/newFeedIcons/lock 01.png",
      title: "Secure Payments ",
      sub: "Secured by Stripe",
    },
    {
      img: "/images/newFeedImg/Paste image.png",
      icon: "/icons/newFeedIcons/call.png",
      title: "24/7 Support ",
      sub: "Secured by Stripe",
    },
  ];
  return (
    <>
      <Container>
        <div className="py-10">
          <div className=" text-center mx-auto font-[Poppins]">
            <h2 className="text-[#6C7275] font-semibold text-[16px]">
              NEWSFEED
            </h2>
            <h1 className="font-semibold text-[30px]">Instagram</h1>
            <p>Follow us on social media for more discount & promotions</p>
            <p className="text-[#6C7275]">@3legant_official</p>
          </div>
          <div className=" md:flex  justify-center md:space-x-5 mt-5 ">
            {newsFeedImgs.map((data) => (
              <div
                key={data.id}
                className="mb-3 md:mb-0  flex items-center justify-center"
              >
                <div className="w-[200px] h-[200px]">
                  <img
                    src={data.img}
                    alt=""
                    className="w-full h-full object-cover mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10  md:gap-4">
              {newsFeedData.map((data) => (
                <div
                  key={data.title}
                  className=" w-[100px] h-[100px] md:w-[200px] md:h-[200px] mt-5 md:mt-10 font-[Poppins]  md:block  md:px-7 "
                >
                  <div className="w-[30px] h-[30px] mb-2">
                    <img
                      src={data.icon}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <h3 className="font-semibold text-[12px] md:text-[15px]">
                    {data.title}
                  </h3>
                  <p className="text-[#6C7275] text-[10px] md:text-[14px]">
                    {data.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewsFeed;
