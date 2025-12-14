import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser } from "../api/register";

const schema = Yup.object({
  username: Yup.string().trim().required("Username is required"),
  email: Yup.string().trim().email("Enter a valid email").required("Email is required"),
  password: Yup.string().trim().required("Password is required"),
});

export default function FormikForm() {
  return (
    <div style={{ maxWidth: 420 }}>
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
          setStatus(null);
          try {
            await registerUser(values);
            setStatus({ ok: true, msg: "Registered successfully ✅" });
            resetForm();
          } catch (err) {
            setStatus({ ok: false, msg: err.message || "Registration failed." });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form noValidate>
            <label>
              Username
              <Field name="username" placeholder="e.g. janedoe" />
            </label>
            <ErrorMessage name="username" component="div" style={{ color: "crimson" }} />

            <label>
              Email
              <Field name="email" placeholder="e.g. jane@email.com" />
            </label>
            <ErrorMessage name="email" component="div" style={{ color: "crimson" }} />

            <label>
              Password
              <Field type="password" name="password" placeholder="********" />
            </label>
            <ErrorMessage name="password" component="div" style={{ color: "crimson" }} />

            <button type="submit" disabled={isSubmitting} style={{ marginTop: 12 }}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>

            {status?.msg && (
              <p style={{ marginTop: 10, color: status.ok ? "green" : "crimson" }}>
                {status.msg}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
