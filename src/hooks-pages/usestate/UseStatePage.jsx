import { useState } from "react";

export default function UseStatePage() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    console.log("Increment Clicked | Before update:", count);
    setCount((prev) => prev + 1);
  };

  const handleDec = () => {
    console.log("Decrement Clicked | Before update:", count);
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    console.log("Reset Clicked | Before update:", count);
    setCount(0);
  };

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "81vh",
        background: "linear-gradient(135deg, #6EE7B7, #3B82F6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
          textAlign: "center",
          width: "350px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>useState Hook</h2>

        <h1
          style={{
            fontSize: "48px",
            color: "#2563EB",
            marginBottom: "25px",
          }}
        >
          {count}
        </h1>

        <div>
          <button
            onClick={handleInc}
            style={{
              background: "#10B981",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              marginRight: "10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            + Increment
          </button>

          <button
            onClick={handleDec}
            style={{
              background: "#EF4444",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              marginRight: "10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            - Decrement
          </button>

          <button
            onClick={handleReset}
            style={{
              background: "#6366F1",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "15px",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

