import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"


export default function ThemeChild ()  {
    const {dark} = useContext(ThemeContext)

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        borderRadius: "10px",
        background: dark ? "#1F2937" : "#F3F4F6",
        color: dark ? "white" : "#111",
      }}
    >
      <h4>This content is styled using Context!</h4>
      <p>(Child Component reacting to theme)</p>
    </div>
  );
}
