import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <div>
      <h2>Profile</h2>

      <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <NavLink to="details">ProfileDetails</NavLink>
        <NavLink to="settings">ProfileSettings</NavLink>
      </nav>

      {/* Nested routes inside Profile ( Routes + Route) */}
      <Routes>
        <Route index element={<Navigate to="details" replace />} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
