import React, { useState, useEffect } from "react";

function MousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Event listener is now removed");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <>
      Hooks X-{x} Y-{y}
    </>
  );
}
export default MousePosition;
