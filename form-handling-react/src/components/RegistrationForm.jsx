import { useState } from "react";
import { registerUser } from "../api/register";

export default function RegistrationForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, message: "", ok: false });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // clear per-field error as user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setStatus({ loading: false, message: "", ok: false });
  }

  function validate(values) {
    const nextErrors = {};
    if (!values.username.trim()) nextErrors.username = "Username is required";
    if (!values.email.trim()) nextErrors.email = "Email is required";
    if (!values.password.trim()) nextErrors.password = "Password is required";
    return nextErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setStatus({ loading: true, message: "", ok: false });
    try {
      await registerUser(form);
      setStatus({ loading: false, message: "Registered successfully ✅", ok: true });
      setForm({ username: "", email: "", password: "" });
    } catch (err) {
      setStatus({ loading: false, message: err.message || "Something went wrong.", ok: false });
    }
  }

  return (
    <div style={{ maxWidth: 420 }}>
      <h2>Controlled Registration Form</h2>

      <form onSubmit={handleSubmit} noValidate>
        <label>
          Username
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="e.g. janedoe"
          />
        </label>
        {errors.username && <div style={{ color: "crimson" }}>{errors.username}</div>}

        <label>
          Email
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="e.g. jane@email.com"
          />
        </label>
        {errors.email && <div style={{ color: "crimson" }}>{errors.email}</div>}

        <label>
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="********"
          />
        </label>
        {errors.password && <div style={{ color: "crimson" }}>{errors.password}</div>}

        <button type="submit" disabled={status.loading} style={{ marginTop: 12 }}>
          {status.loading ? "Submitting..." : "Register"}
        </button>

        {status.message && (
          <p style={{ marginTop: 10, color: status.ok ? "green" : "crimson" }}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}