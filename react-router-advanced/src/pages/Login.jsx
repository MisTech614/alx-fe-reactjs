import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/profile";

  return (
    <div>
      <h2>Login</h2>
      <p>Simulated login (no backend)</p>

      <button
        onClick={() => {
          login();
          navigate(from, { replace: true });
        }}
      >
        Log in
      </button>
    </div>
  );
}
