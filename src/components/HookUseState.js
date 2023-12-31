import React, { useState } from "react";

import "./HookCSS.css";

const HookUseState = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count={count}</button>;
};

export default HookUseState;
