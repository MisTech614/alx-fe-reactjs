import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getAuth } from "../auth";

export default function ProtectedRoute() {
  const location = useLocation();
  const authed = getAuth();

  if (!authed) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
