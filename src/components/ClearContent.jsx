import React, { useState } from "react";

const allData = [
  { name: "Kavya", age: 22, address: "Kirtipur" },
  { name: "Subedi", age: 18, address: "Jhamsikhel" },
  { name: "Rita", age: 3, address: "Banepa" },
  { name: "Gita", age: 12, address: "Baneshwor" },
];

const ClearContent = () => {
  const [items, setItems] = useState(allData);

  const clear = () => {
    setItems([]);
  };

  return (
    <>
      <h1>Hello</h1>
      <div>
        {items.map((data) => (
          <li>{data.name}</li>
        ))}
      </div>
      <button onClick={clear}>Clear</button>
    </>
  );
};

export default ClearContent;
