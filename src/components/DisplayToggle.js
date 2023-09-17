import React, { useState, useEffect } from "react";

function DisplayToggle() {
  const [display, setDisplay] = useState(true);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");

    if (display) {
      window.addEventListener("mousemove", logMousePosition);
    } else {
      window.removeEventListener("mousemove", logMousePosition);
    }

    return () => {
      console.log("Event listener is now removed");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, [display]);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && (
        <>
          Hooks X-{x} Y-{y}
        </>
      )}
    </div>
  );
}

export default DisplayToggle;
