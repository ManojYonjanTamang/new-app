import React, { useState } from "react";
import MousePosition from "./MousePosition";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <MousePosition />}
    </div>
  );
}
export default MouseContainer;
