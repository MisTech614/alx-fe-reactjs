import { NavLink, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2>Profile</h2>

      <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <NavLink to="details">ProfileDetails</NavLink>
        <NavLink to="settings">ProfileSettings</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
