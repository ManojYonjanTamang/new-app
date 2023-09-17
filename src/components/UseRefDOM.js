import React, { useRef, useState } from "react";

const UseRefDOM = () => {
  const [myData, setMyData] = useState("");
  const inputElement = useRef();

  const handleChange = () => {
    inputElement.current.focus();
    inputElement.current.style.backgroundColor = "#A9AF7E";
  };

  return (
    <>
      <input
        ref={inputElement}
        type="text"
        value={myData}
        onChange={(e) => {
          setMyData(e.target.value);
        }}
      />
      <br />
      <button onClick={handleChange}>Submit</button>
      {myData}
    </>
  );
};

export default UseRefDOM;
