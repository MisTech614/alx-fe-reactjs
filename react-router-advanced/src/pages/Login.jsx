import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../auth";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/profile";

  return (
    <div>
      <h2>Login</h2>
      <p>This is a simulated login.</p>
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
