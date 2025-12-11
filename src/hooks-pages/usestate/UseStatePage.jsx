import { useState } from "react";

export default function UseStatePage() {
  const [count, setCount] = useState(0);

  const handleInc = () => setCount((prev) => prev + 1);
  const handleDec = () => setCount((prev) => prev - 1);
  const handleReset = () => setCount(0);

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

        {/* BUTTON CONTAINER */}
        <div
          style={{
            display: "flex",
            flexDirection: window.innerWidth <= 480 ? "column" : "row",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={handleInc}
            style={{
              background: "#10B981",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              width: window.innerWidth <= 480 ? "100%" : "auto",
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
              cursor: "pointer",
              fontSize: "16px",
              width: window.innerWidth <= 480 ? "100%" : "auto",
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
              width: window.innerWidth <= 480 ? "100%" : "auto",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
