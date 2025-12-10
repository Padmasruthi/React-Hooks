// import { useState, useCallback } from "react";

// export default function UseCallbackPage() {
//     const [count, setCount] = useState(0);
//     const [text, setText] = useState("");

//     console.log("Parent rendered");

//     const handleClick = useCallback(() => {
//         console.log("Button clicked! Current count is:", count);
//     }, [count]);

//     return (
//         <div
//             style={{
//                 padding: "30px",
//                 minHeight: "81vh",
//                 background: "linear-gradient(135deg, #a5f5fcff, #81f8f8ff)", 
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 fontFamily: "Arial",
//             }}
//         >
//             <div
//                 style={{
//                     background: "white",
//                     padding: "40px",
//                     borderRadius: "15px",
//                     boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
//                     textAlign: "center",
//                     width: "380px",
//                 }}
//             >
//                 <h2 style={{ marginBottom: "20px", color: "#1E1E1E" }}>
//                     useCallback Hook
//                 </h2>

//                 {/* Count Display */}
//                 <h1
//                     style={{
//                         fontSize: "48px",
//                         color: "#46dde5ff",
//                         marginBottom: "25px",
//                     }}
//                 >
//                     {count}
//                 </h1>

//                 {/* Increment Button */}
//                 <button
//                     onClick={() => setCount((prev) => prev + 1)}
//                     style={{
//                         background: "#63c2f1ff",
//                         color: "white",
//                         border: "none",
//                         padding: "12px 25px",
//                         borderRadius: "8px",
//                         cursor: "pointer",
//                         fontSize: "16px",
//                         marginRight: "10px",
//                     }}
//                 >
//                     + Increment
//                 </button>

//                 {/* Log Count Button */}
//                 <button
//                     onClick={handleClick}
//                     style={{
//                         background: "#38aacaff",
//                         color: "white",
//                         border: "none",
//                         padding: "12px 25px",
//                         borderRadius: "8px",
//                         cursor: "pointer",
//                         fontSize: "16px",
//                     }}
//                 >
//                     Log Count
//                 </button>

//                 {/* Input Box */}
//                 <div style={{ marginTop: "30px" }}>
//                     <input
//                         type="text"
//                         placeholder="Type something..."
//                         value={text}
//                         onChange={(e) => setText(e.target.value)}
//                         style={{
//                             width: "90%",
//                             padding: "12px",
//                             borderRadius: "8px",
//                             border: "2px solid #38aacaff",
//                             outline: "none",
//                             fontSize: "16px",
//                         }}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }



import { useState, useCallback } from "react";

export default function UseCallbackPage() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [message, setMessage] = useState(""); // UI feedback

  const handleClick = useCallback(() => {
    console.log("Button clicked! Current count is:", count);
    setMessage(`Button clicked! Current count is: ${count}`); // show in UI
  }, [count]);

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "81vh",
        background: "linear-gradient(135deg, #a5f5fcff, #81f8f8ff)",
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
        <h2 style={{ marginBottom: "20px", color: "#1E1E1E" }}>
          useCallback Hook
        </h2>

        {/* Count Display */}
        <h1
          style={{
            fontSize: "48px",
            color: "#46dde5ff",
            marginBottom: "25px",
          }}
        >
          {count}
        </h1>

        {/* Increment Button */}
        <button
          onClick={() => setCount((prev) => prev + 1)}
          style={{
            background: "#63c2f1ff",
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

        {/* Log Count Button */}
        <button
          onClick={handleClick}
          style={{
            background: "#38aacaff",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Log Count
        </button>

        {/* Message for Log Count */}
        {message && (
          <p
            style={{
              marginTop: "15px",
              color: "#059669",
              fontWeight: "bold",
            }}
          >
            {message}
          </p>
        )}

        {/* Input Box */}
        <div style={{ marginTop: "30px" }}>
          <input
            type="text"
            placeholder="Type something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              width: "90%",
              padding: "12px",
              borderRadius: "8px",
              border: "2px solid #38aacaff",
              outline: "none",
              fontSize: "16px",
            }}
          />
          <p
            style={{
              marginTop: "8px",
              fontSize: "10px",
              color: "#1E1E1E",
              fontStyle: "italic",
            }}
          >
            Input field stores your text and can be used anywhere without re-rendering parent.
          </p>
        </div>
      </div>
    </div>
  );
}
