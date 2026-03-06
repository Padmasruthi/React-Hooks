// import { useState } from "react";

// export default function UseStatePage() {
//   const [count, setCount] = useState(0);

//   const handleInc = () => setCount((prev) => prev + 1);
//   const handleDec = () => setCount((prev) => prev - 1);
//   const handleReset = () => setCount(0);

//   return (
//     <div
//       style={{
//         padding: "30px",
//         minHeight: "81vh",
//         background: "linear-gradient(135deg, #6EE7B7, #3B82F6)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         fontFamily: "Arial",
//       }}
//     >
//       <div
//         style={{
//           background: "white",
//           padding: "40px",
//           borderRadius: "15px",
//           boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
//           textAlign: "center",
//           width: "350px",
//         }}
//       >
//         <h2 style={{ marginBottom: "20px", color: "#333" }}>useState Hook</h2>

//         <h1
//           style={{
//             fontSize: "48px",
//             color: "#2563EB",
//             marginBottom: "25px",
//           }}
//         >
//           {count}
//         </h1>

//         {/* BUTTON CONTAINER */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: window.innerWidth <= 480 ? "column" : "row",
//             gap: "10px",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <button
//             onClick={handleInc}
//             style={{
//               background: "#10B981",
//               color: "white",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "16px",
//               width: window.innerWidth <= 480 ? "100%" : "auto",
//             }}
//           >
//             + Increment
//           </button>

//           <button
//             onClick={handleDec}
//             style={{
//               background: "#EF4444",
//               color: "white",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "16px",
//               width: window.innerWidth <= 480 ? "100%" : "auto",
//             }}
//           >
//             - Decrement
//           </button>

//           <button
//             onClick={handleReset}
//             style={{
//               background: "#6366F1",
//               color: "white",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "16px",
//               width: window.innerWidth <= 480 ? "100%" : "auto",
//             }}
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";

// export default function UseStatePage() {
//   const [count, setCount] = useState(0);

//   const handleInc = () => setCount((prev) => prev + 1);
//   const handleDec = () => setCount((prev) => prev - 1);
//   const handleReset = () => setCount(0);

//   return (
//     <div
//       style={{
//         padding: "30px",
//         minHeight: "81vh",
//         background: "linear-gradient(135deg, #6EE7B7, #3B82F6)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         fontFamily: "Arial",
//       }}
//     >
//       <div
//         style={{
//           background: "white",
//           padding: "40px",
//           borderRadius: "15px",
//           boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
//           textAlign: "center",
//           width: "380px",
//         }}
//       >
//         <h2 style={{ marginBottom: "10px", color: "#333" }}>
//           useState Hook
//         </h2>

//         <p style={{ fontSize: "14px", color: "#555", marginBottom: "20px" }}>
//           This page demonstrates how <b>useState</b> works in React.
//         </p>

//         <h1
//           style={{
//             fontSize: "48px",
//             color: "#2563EB",
//             marginBottom: "20px",
//           }}
//         >
//           {count}
//         </h1>

//         {/* BUTTONS */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: window.innerWidth <= 480 ? "column" : "row",
//             gap: "10px",
//             justifyContent: "center",
//             alignItems: "center",
//             marginBottom: "20px",
//           }}
//         >
//           <button
//             onClick={handleInc}
//             style={{
//               background: "#10B981",
//               color: "white",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "16px",
//               width: window.innerWidth <= 480 ? "100%" : "auto",
//             }}
//           >
//             + Increment
//           </button>

//           <button
//             onClick={handleDec}
//             style={{
//               background: "#EF4444",
//               color: "white",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "16px",
//               width: window.innerWidth <= 480 ? "100%" : "auto",
//             }}
//           >
//             - Decrement
//           </button>

//           <button
//             onClick={handleReset}
//             style={{
//               background: "#6366F1",
//               color: "white",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "16px",
//               width: window.innerWidth <= 480 ? "100%" : "auto",
//             }}
//           >
//             Reset
//           </button>
//         </div>

//         {/* EXPLANATION BOX */}
//         <div
//           style={{
//             background: "#F3F4F6",
//             padding: "15px",
//             borderRadius: "10px",
//             textAlign: "left",
//             fontSize: "14px",
//             color: "#374151",
//           }}
//         >
//           <p><b>🔹 useState(0)</b> → Count value store pannum.</p>
//           <p><b>🔹 Increment</b> → Count +1 increase agum.</p>
//           <p><b>🔹 Decrement</b> → Count -1 decrease agum.</p>
//           <p><b>🔹 Reset</b> → Count value 0 ku set agum.</p>
//           <p style={{ marginTop: "8px", fontStyle: "italic" }}>
//             👉 State change aana udane UI auto-update agum (Re-render).
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";

export default function UseStatePage() {
  const [count, setCount] = useState(0);
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  const handleInc = () => {
    setCount((prev) => prev + 1);
    showToast("Increment clicked → Count +1");
  };

  const handleDec = () => {
    setCount((prev) => prev - 1);
    showToast("Decrement clicked → Count -1");
  };

  const handleReset = () => {
    setCount(0);
    showToast("Reset clicked → Count set to 0");
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
      {/* ✅ TOAST */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "100px",
            right: "20px",
            background: "#111827",
            color: "#fff",
            padding: "12px 18px",
            borderRadius: "8px",
            fontSize: "14px",
            zIndex: 9999, // 🔥 IMPORTANT
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
            pointerEvents: "none",
          }}
        >
          {toast}
        </div>
      )}

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
        <h2 style={{ marginBottom: "10px", color: "#333" }}>
          useState Hook
        </h2>

        <p style={{ fontSize: "14px", color: "#555", marginBottom: "20px" }}>
          This page demonstrates how <b>useState</b> works in React.
        </p>

        <h1
          style={{
            fontSize: "48px",
            color: "#2563EB",
            marginBottom: "20px",
          }}
        >
          {count}
        </h1>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            flexDirection: window.innerWidth <= 480 ? "column" : "row",
            gap: "10px",
            justifyContent: "center",
            marginBottom: "20px",
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
            }}
          >
            Reset
          </button>
        </div>

        {/* EXPLANATION */}
        <div
          style={{
            background: "#F3F4F6",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "left",
            fontSize: "14px",
          }}
        >
          <p><b>🔹 useState(0)</b> → Count value store pannum.</p>
          <p><b>🔹 Increment</b> → Count +1 increase agum.</p>
          <p><b>🔹 Decrement</b> → Count -1 decrease agum.</p>
          <p><b>🔹 Reset</b> → Count value 0 ku set agum.</p>
          <p style={{ marginTop: "8px", fontStyle: "italic" }}>
            👉 State change aana udane UI auto-update agum (Re-render).
          </p>
        </div>
      </div>
    </div>
  );
}
