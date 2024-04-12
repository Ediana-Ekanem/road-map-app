import React from "react";

const Button = ({
  className,
  color,
  width,
  isRounded,
  children,
  loading,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`text-sm px-6 py-2 mt-5 ${
        color === "black"
          ? "bg-black text-white"
          : color === "gray"
          ? "bg-slate-200 text-black"
          : color === "blue"
          ? "bg-blue-600 text-white"
          : "border border-black text-black "
      } ${
        isRounded === "md"
          ? "rounded-lg"
          : isRounded === "full"
          ? "rounded-full"
          : isRounded === "xl"
          ? "rounded-xl"
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
      {loading ? "loading... " : children}
    </button>
  );
};

export default Button;
