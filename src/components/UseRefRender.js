import React, { useEffect, useRef, useState } from "react";

const UseRefRender = () => {
  const [myData, setMyData] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <div>{myData}</div>
      <div>Rendering {count.current} times.</div>
    </>
  );
};

export default UseRefRender;
