import React, { useState } from "react";

const ChangeColor = () => {
  const [isColor, setIsColor] = useState(true);

  const handleClick = () => {
    setIsColor(!isColor);
  };

  const backgroundColor = isColor ? "Blue" : "Red";

  return (
    <>
      <div style={{ backgroundColor }}>
        <button onClick={handleClick}>Click</button>
      </div>
    </>
  );
};

export default ChangeColor;
