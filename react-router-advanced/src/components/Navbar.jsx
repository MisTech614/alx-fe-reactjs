import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, logout } from "../auth";

export default function Navbar() {
  const navigate = useNavigate();
  const authed = getAuth();

  return (
    <nav style={{ display: "flex", gap: 12, marginBottom: 20 }}>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/profile">Profile</NavLink>

      <span style={{ marginLeft: "auto" }}>
        {authed ? (
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
