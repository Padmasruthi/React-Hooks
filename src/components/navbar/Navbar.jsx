import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-title" style={{textDecoration: 'none'}}>React Hooks</Link>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>UseState</Link>
        <Link to="/useeffect" onClick={() => setOpen(false)}>UseEffect</Link>
        <Link to="/useref" onClick={() => setOpen(false)}>UseRef</Link>
        <Link to="/usememo" onClick={() => setOpen(false)}>UseMemo</Link>
        <Link to="/usecallback" onClick={() => setOpen(false)}>UseCallback</Link>
        <Link to="/usecontext" onClick={() => setOpen(false)}>UseContext</Link>
        <Link to="/usereducer" onClick={() => setOpen(false)}>UseReducer</Link>
      </div>
    </nav>
  );
}

