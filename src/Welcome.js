import React, { useState } from "react";

function Welcome({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome to React, {name}</h1>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default Welcome;
