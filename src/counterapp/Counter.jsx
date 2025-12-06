
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // 👉 useEffect part
  useEffect(() => {
    console.log("useEffect running... Count changed:", count);
    // document.title = `Count: ${count}`; // browser tab title la show pannum
  }, [count]); // dependency array

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;



