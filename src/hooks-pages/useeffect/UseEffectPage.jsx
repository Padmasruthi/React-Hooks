import { useEffect, useState } from "react";

export default function UseEffectPage() {

const [count, setCount] = useState(0);

// 1. runs on component mount
 useEffect(() => {
  console.log("Component mounted first render");
  
return() => {
    console.log("Component unmounted (cleanUp)");
    
}
}, [])

// 2. runs every time count changes.
useEffect(() => {
    console.log("count updated:", count);
    
}, [count])


 return (
    <div
      style={{
        padding: "30px",
        minHeight: "81vh",
        background: " #F87171",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
      className="page-wrapper"
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
        <h2 style={{ marginBottom: "20px", color: "#333" }}>
          useEffect Hook
        </h2>

        <h1 style={{ fontSize: "48px", color: "#DC2626", marginBottom: "25px" }}>
          {count}
        </h1>

        <button
          onClick={() => setCount((prev) => prev + 1)}
          style={{
            background: "#F97316",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            marginRight: "10px",
          }}
        >
          + Increment
        </button>

        <button
          onClick={() => setCount(0)}
          style={{
            background: "#4F46E5",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

