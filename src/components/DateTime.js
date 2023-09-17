import React from "react";

const DateTime = () => {
  var receive = new Date();
  var displayAll = receive.toString();

  var customize = new Date(2023, 3, 15);
  var customizeDisplay = customize.toString();
  var customizeDisplay1 = customize.toISOString();

  var displayYear = receive.getFullYear();
  return (
    <>
      <h1>
        {displayAll}
        <br />
        {customizeDisplay}
        <br />
        {customizeDisplay1}
        <br />
        {displayYear}
      </h1>
    </>
  );
};

export default DateTime;
