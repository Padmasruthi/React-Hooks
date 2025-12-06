// import { Link } from "react-router-dom";

// export default function Navbar() {

//     return (

//         <nav style={{ padding: '20px', background: '#222', color: '#fff' }}>
//             <Link to="/" style={{ marginRight: '20px', color: 'white' }}>UseState</Link>
//             <Link to="/useeffect" style={{ marginRight: '20px', color: 'white' }}>UseEffect</Link>
//             <Link to="/useref" style={{ marginRight: '20px', color: 'white' }}>UseRef</Link>
//             <Link to="/usememo" style={{ marginRight: '20px', color: 'white' }}>UseMemo</Link>
//             <Link to="/usecallback" style={{ marginRight: '20px', color: 'white' }}>UseCallback</Link>
//             <Link to="/usecontext" style={{ marginRight: '20px', color: 'white' }}>UseContext</Link>
//             <Link to="/usereducer" style={{ marginRight: '20px', color: 'white' }}>UseReducer</Link>
//             <Link to="/todos" style={{ marginRight: '20px', color: 'white' }}>Todo APP</Link>
//         </nav>

//     )
// }
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* LEFT SIDE TITLE */}
      <div className="nav-title">React Hooks</div>

      {/* RIGHT SIDE LINKS */}
      <div className="nav-links">
        <NavLink to="/">UseState</NavLink>
        <NavLink to="/useeffect">UseEffect</NavLink>
        <NavLink to="/useref">UseRef</NavLink>
        <NavLink to="/usememo">UseMemo</NavLink>
        <NavLink to="/usecallback">UseCallback</NavLink>
        <NavLink to="/usecontext">UseContext</NavLink>
        <NavLink to="/usereducer">UseReducer</NavLink>
      </div>
    </nav>
  );
}
