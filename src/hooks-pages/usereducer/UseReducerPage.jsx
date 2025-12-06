import { useReducer } from "react"

const initialState = { count: 0 };


function reducer(state, action) {
    console.log("Action fired:", action.type, "| previous:", state);

    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };

        case "decrement":
            return { count: state.count - 1 }
        case "reset":
            return { count: 0 };
        default:
            return state;
    }

}

export default function UseReducerPage() {

const [state, dispatch] = useReducer(reducer, initialState)

 
  return (
    <div
      style={{
        padding: "30px",
        minHeight: "81vh",
        background: "linear-gradient(135deg, #FBCFE8, #F87171)", // 💗 Pink theme
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
          useReducer Hook
        </h2>

        <h1
          style={{
            fontSize: "48px",
            color: "#DB2777",
            marginBottom: "25px",
          }}
        >
          {state.count}
        </h1>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    marginTop: "20px",
    flexWrap: "wrap", // optional (small screen la wrap aagum)
  }}
>
  <button
    onClick={() => dispatch({ type: "increment" })}
    style={{
      background: "#EC4899",
      color: "white",
      border: "2px solid #d8056eff",
      padding: "12px 25px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
    }}
  >
    + Increment
  </button>

  <button
    onClick={() => dispatch({ type: "decrement" })}
    style={{
      background: "#D946EF",
      color: "white",
      border: "2px solid #c700e5ff",
      padding: "12px 25px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
    }}
  >
    – Decrement
  </button>

  <button
    onClick={() => dispatch({ type: "reset" })}
    style={{
      background: "#7E22CE",
      color: "white",
      border: "2px solid #c299e6ff",
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
    </div>
  );
}

