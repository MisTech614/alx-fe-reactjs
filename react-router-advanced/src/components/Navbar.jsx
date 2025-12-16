import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav style={{ display: "flex", gap: 12, marginBottom: 20 }}>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/profile">Profile</NavLink>

      <span style={{ marginLeft: "auto" }}>
        {isAuthenticated ? (
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </span>
    </nav>
  );
}
