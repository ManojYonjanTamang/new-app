import React from "react";

const WFHcomparison = (props) => {
  const { number } = props;
  return (
    <>
      null == undefined: {null == undefined ? "True" : "False"}
      <br />
      null === undefined: {null === undefined ? "True" : "False"}
      <br />5 == 2 : {5 == 2 ? "True" : "False"}
      <br />5 === 2 : {5 === 2 ? "True" : "False"}
      <br />5 != 2 : {5 != 2 ? "True" : "False"}
      <br />5 !== 2 : {5 !== 2 ? "True" : "False"}
      <br />5 >= 2 : {5 >= 2 ? "True" : "False"}
      <hr />
      <br />2 == 2 : {2 == 2 ? "True" : "False"}
      <br />2 === 2 : {2 === 2 ? "True" : "False"}
      <br />2 === "2" : {2 === "2" ? "True" : "False"}
      <br />2 == "2" : {2 == "2" ? "True" : "False"}
      <br />2 != 2 : {2 != 2 ? "True" : "False"}
      <br />2 !== 2 : {2 !== 2 ? "True" : "False"}
      <br />2 !== "2" : {2 !== "2" ? "True" : "False"}
      <br />2 >= 2 : {2 >= 2 ? "True" : "False"}
      {/* <p>
        {number} >=2: {{ number } >= 2 ? "Yes" : "No"}
        <br />
      </p> */}
    </>
  );
};

export default WFHcomparison;
