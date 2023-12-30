import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" w-full md:max-w-7xl max-w-sm mx-auto">{children}</div>
  );
};

export default Container;
