import { NavLink, Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui, Arial" }}>
      <h1>Form Handling in React</h1>

      <nav style={{ display: "flex", gap: 12, marginBottom: 20 }}>
        <NavLink to="/" end>Controlled</NavLink>
        <NavLink to="/formik">Formik</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/formik" element={<FormikForm />} />
      </Routes>
    </div>
  );
}
