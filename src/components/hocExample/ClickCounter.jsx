import { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2 onClick={incrementCount}>cliked {count} times</h2>
    </div>
  );
};

export default ClickCounter;
