import React from "react";
import JustInProp from "./JustInProp";
import { Data } from "../../DataJustIn";
import Container from "../Container";

const newData = (item) => {
  return (
    <JustInProp
      key={item.id}
      image={item.image}
      title={item.title}
      type={item.type}
      amount={item.amount}
    />
  );
};

export const JustIn = () => {
  return (
    <div>
      <Container>
        <h2 className="font-bold text-3xl mt-5 mb-10">Just In</h2>
        <div className="flex space-x-5">{Data.map(newData)}</div>
      </Container>
    </div>
  );
};
