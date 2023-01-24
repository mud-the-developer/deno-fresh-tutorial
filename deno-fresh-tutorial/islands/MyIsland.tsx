// islands/MyIsland.tsx

import { useState } from "preact/hooks";

export default function MyIsland() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Counter is at {count}.{" "}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}