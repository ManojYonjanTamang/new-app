import React, { useState } from "react";

const RandomNumGenerator = () => {
  const [items, setItems] = useState([]);

  const generateNum = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };

  return (
    <>
      <button onClick={generateNum}>Generate</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value} </li>
        ))}
      </ul>
    </>
  );
};

export default RandomNumGenerator;
