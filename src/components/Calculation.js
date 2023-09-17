import React from "react";

const Calculation = (a, b) => {
  return (
    <>
      <h1>Here's the calculation examples:</h1>
    </>
  );
};

const Addition = (a, b) => {
  return <>Addition: {a + b}</>;
};

const Subtraction = (a, b) => {
  return <>Subtraction: {a - b}</>;
};
const Multiplication = (a, b) => {
  return <>Multiplication: {a * b}</>;
};
export default Calculation;
export { Addition, Subtraction, Multiplication };
