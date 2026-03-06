// import { useEffect, useState } from "react";

// function Child({ onUnmount }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Child Mounted");
//     return () => {
//       console.log("Child Unmounted");
//       onUnmount();
//     };
//   }, [onUnmount]);

//   return (
//     <div
//       style={{
//         padding: "30px",
//         borderRadius: "12px",
//         border: "2px solid #F87171",
//         width: "100%",          // fill parent width
//         maxWidth: "280px",      // desktop max width
//         background: "#FFF0F0",
//         boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
//         textAlign: "center",
//         boxSizing: "border-box",
//         marginTop: "20px",      // spacing from button/message
//       }}
//     >
//       <h2 style={{ color: "#DC2626", marginBottom: "20px" }}>Child Component</h2>

//       <h3 style={{ fontSize: "32px", marginBottom: "15px" }}>Count: {count}</h3>

//       <button
//         onClick={() => setCount(prev => prev + 1)}
//         style={{
//           background: "#F97316",
//           color: "white",
//           border: "none",
//           padding: "12px 25px",
//           borderRadius: "8px",
//           cursor: "pointer",
//           fontSize: "16px",
//         }}
//       >
//         Increment
//       </button>
//     </div>
//   );
// }

// export default function UseEffectDemo() {
//   const [show, setShow] = useState(true);
//   const [message, setMessage] = useState("Component Mounted ✅");

//   const handleToggle = () => {
//     setShow(prev => !prev);
//     setMessage(prev => (prev === "Component Mounted ✅" ? "Component Unmounted ❌" : "Component Mounted ✅"));
//   };

//   return (
//     <div
//       style={{
//         padding: "30px",
//         minHeight: "81vh",
//         background: "#F87171",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         fontFamily: "Arial",
//       }}
//     >
//       <div
//         style={{
//           background: "white",
//           padding: "30px 20px",
//           borderRadius: "15px",
//           boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
//           textAlign: "center",
//           width: "90%",
//           maxWidth: "380px",
//           boxSizing: "border-box",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center", // ensures child is centered
//         }}
//       >
//         <h2 style={{ marginBottom: "20px", color: "#333" }}>useEffect Hook</h2>

//         <button
//           onClick={handleToggle}
//           style={{
//             background: show ? "#4F46E5" : "#10B981",
//             color: "white",
//             border: "none",
//             padding: "12px 25px",
//             borderRadius: "8px",
//             cursor: "pointer",
//             fontSize: "16px",
//             marginBottom: "15px",
//           }}
//         >
//           {show ? "Hide Child" : "Show Child"}
//         </button>

//         <p
//           style={{
//             color: show ? "green" : "red",
//             fontWeight: "bold",
//             marginBottom: "10px",
//           }}
//         >
//           {message}
//         </p>

//         {show && <Child onUnmount={() => setMessage("Component Unmounted ❌")} />}
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";

// function Child({ onUnmount }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Child Mounted");

//     return () => {
//       console.log("Child Unmounted");
//       onUnmount();
//     };
//   }, [onUnmount]);

//   return (
//     <div
//       style={{
//         padding: "30px",
//         borderRadius: "12px",
//         border: "2px solid #F87171",
//         width: "100%",
//         maxWidth: "280px",
//         background: "#FFF0F0",
//         boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
//         textAlign: "center",
//         boxSizing: "border-box",
//         marginTop: "20px",
//       }}
//     >
//       <h2 style={{ color: "#DC2626", marginBottom: "20px" }}>
//         Child Component
//       </h2>

//       <h3 style={{ fontSize: "32px", marginBottom: "15px" }}>
//         Count: {count}
//       </h3>

//       <button
//         onClick={() => setCount(prev => prev + 1)}
//         style={{
//           background: "#F97316",
//           color: "white",
//           border: "none",
//           padding: "12px 25px",
//           borderRadius: "8px",
//           cursor: "pointer",
//           fontSize: "16px",
//         }}
//       >
//         Increment
//       </button>
//     </div>
//   );
// }

// export default function UseEffectDemo() {
//   const [show, setShow] = useState(true);
//   const [message, setMessage] = useState("Component Mounted ✅");

//   const handleToggle = () => {
//     setShow(prev => !prev);
//     setMessage(prev =>
//       prev === "Component Mounted ✅"
//         ? "Component Unmounted ❌"
//         : "Component Mounted ✅"
//     );
//   };

//   return (
//     <div
//       style={{
//         padding: "30px",
//         minHeight: "81vh",
//         background: "#F87171",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         fontFamily: "Arial",
//       }}
//     >
//       <div
//         style={{
//           background: "white",
//           padding: "30px 20px",
//           borderRadius: "15px",
//           boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
//           textAlign: "center",
//           width: "90%",
//           maxWidth: "400px",
//           boxSizing: "border-box",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <h2 style={{ marginBottom: "10px", color: "#333" }}>
//           useEffect Hook
//         </h2>

//         <p style={{ fontSize: "14px", color: "#555", marginBottom: "20px" }}>
//           This example demonstrates <b>mount</b> and <b>unmount</b> lifecycle
//           using useEffect.
//         </p>

//         <button
//           onClick={handleToggle}
//           style={{
//             background: show ? "#4F46E5" : "#10B981",
//             color: "white",
//             border: "none",
//             padding: "12px 25px",
//             borderRadius: "8px",
//             cursor: "pointer",
//             fontSize: "16px",
//             marginBottom: "15px",
//           }}
//         >
//           {show ? "Hide Child" : "Show Child"}
//         </button>

//         <p
//           style={{
//             color: show ? "green" : "red",
//             fontWeight: "bold",
//             marginBottom: "10px",
//           }}
//         >
//           {message}
//         </p>

//         {show && <Child onUnmount={() => setMessage("Component Unmounted ❌")} />}

//         {/* EXPLANATION BOX */}
//         <div
//           style={{
//             background: "#F3F4F6",
//             padding: "15px",
//             borderRadius: "10px",
//             textAlign: "left",
//             fontSize: "14px",
//             color: "#374151",
//             marginTop: "20px",
//           }}
//         >
//           <p>
//             <b>🔹 useEffect()</b> runs when the Child component is mounted.
//           </p>
//           <p>
//             <b>🔹 Cleanup function (return)</b> runs when Child is unmounted.
//           </p>
//           <p>
//             <b>🔹 Show / Hide button</b> controls mounting & unmounting.
//           </p>
//           <p>
//             <b>🔹 Console logs</b> help track lifecycle events.
//           </p>
//           <p style={{ marginTop: "8px", fontStyle: "italic" }}>
//             👉 useEffect cleanup is mainly used for subscriptions, timers,
//             event listeners, etc.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";

function Child({ onUnmount, showToast }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Child Mounted");
    showToast("Child Mounted → useEffect executed");

    return () => {
      console.log("Child Unmounted");
      showToast("Child Unmounted → Cleanup executed");
      onUnmount();
    };
  }, [onUnmount, showToast]);

  return (
    <div
      style={{
        padding: "30px",
        borderRadius: "12px",
        border: "2px solid #F87171",
        width: "100%",
        maxWidth: "280px",
        background: "#FFF0F0",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
        textAlign: "center",
        boxSizing: "border-box",
        marginTop: "20px",
      }}
    >
      <h2 style={{ color: "#DC2626", marginBottom: "20px" }}>
        Child Component
      </h2>

      <h3 style={{ fontSize: "32px", marginBottom: "15px" }}>
        Count: {count}
      </h3>

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
  const [toast, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const handleToggle = () => {
    setShow(prev => !prev);
    setMessage(prev =>
      prev === "Component Mounted ✅"
        ? "Component Unmounted ❌"
        : "Component Mounted ✅"
    );
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
      {/* ✅ TOAST */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "#111827",
            color: "white",
            padding: "12px 18px",
            borderRadius: "8px",
            fontSize: "14px",
            zIndex: 9999,
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            pointerEvents: "none",
          }}
        >
          {toast}
        </div>
      )}

      <div
        style={{
          background: "white",
          padding: "30px 20px",
          borderRadius: "15px",
          boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
          textAlign: "center",
          width: "90%",
          maxWidth: "400px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ marginBottom: "10px", color: "#333" }}>
          useEffect Hook
        </h2>

        <p style={{ fontSize: "14px", color: "#555", marginBottom: "20px" }}>
          This example demonstrates <b>mount</b> and <b>unmount</b> lifecycle
          using useEffect.
        </p>

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

        {show && (
          <Child
            onUnmount={() => setMessage("Component Unmounted ❌")}
            showToast={showToast}
          />
        )}

        {/* EXPLANATION BOX */}
        <div
          style={{
            background: "#F3F4F6",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "left",
            fontSize: "14px",
            color: "#374151",
            marginTop: "20px",
          }}
        >
          <p><b>🔹 useEffect()</b> runs when Child is mounted.</p>
          <p><b>🔹 Cleanup function</b> runs when Child is unmounted.</p>
          <p><b>🔹 Toast</b> explains lifecycle visually.</p>
          <p><b>🔹 Show / Hide</b> controls mount & unmount.</p>
          <p style={{ marginTop: "8px", fontStyle: "italic" }}>
            👉 useEffect cleanup is mainly used for subscriptions, timers,
            event listeners, etc.
          </p>
        </div>
      </div>
    </div>
  );
}
