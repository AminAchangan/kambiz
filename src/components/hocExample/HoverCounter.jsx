import { useState } from "react";

const HoverCount = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2 onMouseOver={incrementCount}>hoverd {count} times</h2>
    </div>
  );
};

export default HoverCount;
