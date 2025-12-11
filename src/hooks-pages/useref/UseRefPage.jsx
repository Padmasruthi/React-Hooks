import { useState, useEffect, useRef } from "react";

export default function UseRefPage() {
  const inputRef = useRef(null);
  const prevCount = useRef(0);
  const renderCount = useRef(1);

  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    renderCount.current += 1;
  });

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  // Detect mobile screen only (<480px)
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 480);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "81vh",
        background: "linear-gradient(135deg, #de0b9eff, #fa60dbff)",
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
          width: isMobile ? "90%" : "380px",   // ONLY mobile responsive
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>useRef Hook</h2>

        {/* Input + Focus Button */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "25px",
          }}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Type something..."
            style={{
              width: isMobile ? "100%" : "70%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #888",
              fontSize: "16px",
            }}
          />

          <button
            onClick={handleFocus}
            style={{
              background: "#e758bcff",
              color: "white",
              border: "2px solid #d328a0ff",
              padding: "7px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "12px",
              width: isMobile ? "100%" : "",
            }}
          >
            Focus Input
          </button>
        </div>

        <h3 style={{ color: "#4F46E5" }}>Current Count: {count}</h3>
        <h4 style={{ color: "#DC2626" }}>Previous Count: {prevCount.current}</h4>
        <h4 style={{ color: "#059669" }}>Render Count: {renderCount.current}</h4>

        {/* Increment + Reset */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "10px",
            marginTop: "20px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setCount((c) => c + 1)}
            style={{
              background: "#10B981",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              width: isMobile ? "100%" : "auto",
            }}
          >
            + Increment
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
              width: isMobile ? "100%" : "auto",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
