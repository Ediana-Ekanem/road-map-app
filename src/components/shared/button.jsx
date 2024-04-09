import React from "react";

const Button = ({ className, color, width, isRounded, children, ...rest }) => {
  return (
    <button
      className={`text-sm px-6 py-2 ${
        color === "black"
          ? "bg-black text-white"
          : color === "gray"
          ? "bg-slate-200 text-black"
          : "border border-black text-black"
      } ${
        isRounded === "md"
          ? "rounded-lg"
          : isRounded === "full"
          ? "rounded-full"
          : ""
      } ${
        width === "sm"
          ? "w-28"
          : width === "md"
          ? "w-40"
          : width === "full"
          ? "w-full"
          : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
