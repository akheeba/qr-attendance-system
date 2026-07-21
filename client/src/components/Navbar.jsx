import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>QR Attendance System</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/student">Student</Link>
      </div>
    </nav>
  );
}

export default Navbar;