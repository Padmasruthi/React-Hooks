import { useState, useMemo } from "react"

export default function UseMemoPage() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    // Heavy calculation simulation

    const expensiveCalculation = (num) => {
        console.log("Running Heavy Calculation...");

        // simulate delay

        let total = 0;
        for (let i = 0; i < 100000000; i++) {
            total += i
        }
        return num * 2

    };

    const doubledValue = useMemo(() => expensiveCalculation(count), [count])


  return (
    <div
      style={{
        padding: "30px",
        minHeight: "81vh",
        background: "linear-gradient(135deg, #FBBF24, #F43F5E)",
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
          width: "380px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>useMemo Hook</h2>

        <h3 style={{ color: "#4F46E5" }}>Count: {count}</h3>
        <h3 style={{ color: "#DC2626" }}>Doubled (Expensive Calculation): {doubledValue}</h3>

        <div style={{ margin: "20px 0" }}>
          <button
            onClick={() => setCount(count + 1)}
            style={{
              background: "#10B981",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              marginRight: "10px",
            }}
          >
            + Increment Count
          </button>

          <button
            onClick={() => setCount(0)}
            style={{
              background: "#EF4444",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Reset Count
          </button>
        </div>

        <input
          type="text"
          placeholder="Type anything..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #888",
            fontSize: "16px",
          }}
        />
        <p style={{ marginTop: "10px" }}>You typed: {text}</p>
      </div>
    </div>
  );
}

