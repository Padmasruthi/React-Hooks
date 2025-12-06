import { useState, useEffect, useRef } from "react"



export default function UseRefPage () {

    const inputRef = useRef(null)  //For focusing input
    const prevCount = useRef(0)   //To store previous value
    const renderCount = useRef(1) //Count renders without re-rendering

    const [count, setCount] =useState(0)

    useEffect(() => {
        // track renders(no re-render caused by useRef)
        renderCount.current += 1
    })

    // store previous value
    useEffect(() => {
        prevCount.current = count
    }, [count])

    const handleFocus = () => {
        console.log("Focusing input...");
        
        inputRef.current.focus(); //DOM focus
    }

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
          width: "380px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>useRef Hook</h2>


<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "25px", // same spacing as your old button
  }}
>
  <input
    ref={inputRef}
    type="text"
    placeholder="Type something..."
    style={{
      width: "70%", // equivalent to your old 90% inside flex
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
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      whiteSpace: "nowrap",
    }}
  >
    Focus Input
  </button>
</div>


        {/* Counter Section */}
        <h3 style={{ color: "#4F46E5" }}>Current Count: {count}</h3>
        <h4 style={{ color: "#DC2626" }}>Previous Count: {prevCount.current}</h4>
        <h4 style={{ color: "#059669" }}>Render Count: {renderCount.current}</h4>

        <div style={{ marginTop: "20px" }}>
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
              marginRight: "10px",
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
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>





  );
}

 