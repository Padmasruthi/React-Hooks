import { useEffect, useState } from "react";

function Child({ onUnmount }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Child Mounted");
    return () => {
      console.log("Child Unmounted");
      onUnmount();
    };
  }, [onUnmount]);

  return (
    <div
      style={{
        padding: "30px",
        borderRadius: "12px",
        border: "2px solid #F87171",
        width: "100%",          // fill parent width
        maxWidth: "280px",      // desktop max width
        background: "#FFF0F0",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
        textAlign: "center",
        boxSizing: "border-box",
        marginTop: "20px",      // spacing from button/message
      }}
    >
      <h2 style={{ color: "#DC2626", marginBottom: "20px" }}>Child Component</h2>

      <h3 style={{ fontSize: "32px", marginBottom: "15px" }}>Count: {count}</h3>

      <button
        onClick={() => setCount(prev => prev + 1)}
        style={{
          background: "#F97316",
          color: "white",
          border: "none",
          padding: "12px 25px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default function UseEffectDemo() {
  const [show, setShow] = useState(true);
  const [message, setMessage] = useState("Component Mounted ✅");

  const handleToggle = () => {
    setShow(prev => !prev);
    setMessage(prev => (prev === "Component Mounted ✅" ? "Component Unmounted ❌" : "Component Mounted ✅"));
  };

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "81vh",
        background: "#F87171",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px 20px",
          borderRadius: "15px",
          boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
          textAlign: "center",
          width: "90%",
          maxWidth: "380px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // ensures child is centered
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>useEffect Hook</h2>

        <button
          onClick={handleToggle}
          style={{
            background: show ? "#4F46E5" : "#10B981",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            marginBottom: "15px",
          }}
        >
          {show ? "Hide Child" : "Show Child"}
        </button>

        <p
          style={{
            color: show ? "green" : "red",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          {message}
        </p>

        {show && <Child onUnmount={() => setMessage("Component Unmounted ❌")} />}
      </div>
    </div>
  );
}
