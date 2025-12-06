import { useState } from "react"
import { ThemeContext } from "./ThemeContext";
import ThemeChild from './ThemeChild'

export default function UseContextPage() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    console.log("Toggling theme, previous:", dark);
    setDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div
        style={{
          padding: "30px",
          minHeight: "80vh",
          background: dark
            ? "linear-gradient(135deg, #4C1D95, #7C3AED)" // 🌙 DARK PURPLE
            : "linear-gradient(135deg, #A78BFA, #6366F1)", // ☀️ LIGHT PURPLE
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial",
          transition: "0.4s ease-in-out",
        }}
      >
        <div
          style={{
            background: dark ? "#1F1B2E" : "white",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
            textAlign: "center",
            width: "380px",
            transition: "0.4s ease-in-out",
          }}
        >
          <h2 style={{ marginBottom: "20px", color: dark ? "#E5E5FF" : "#111" }}>
            useContext Hook
          </h2>

          <h3
            style={{
              marginBottom: "20px",
              color: dark ? "#C4B5FD" : "#4B5563",
            }}
          >
            Current Theme: {dark ? "Dark Mode" : "Light Mode"}
          </h3>

          <button
            onClick={toggleTheme}
            style={{
              background: dark ? "#4C1D95" : "#8B5CF6",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "0.3s",
            }}
          >
            Toggle Theme
          </button>

          <ThemeChild />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
