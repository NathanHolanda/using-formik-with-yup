import { Formik, Field, ErrorMessage } from "formik";
import "./App.css";
import * as Yup from "yup";

function CustomErrorMessage(props) {
  return (
    <ErrorMessage {...props}>
      {(message) => <small style={{ color: "#d33" }}>{message}</small>}
    </ErrorMessage>
  );
}

function App() {
  return (
    <div className="container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          age: "",
          gender: "",
          field: "",
          technologies: [],
          about: "",
        }}
        onSubmit={(values) => {
          alert("Thank you!");

          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Name is required")
            .min(2, "Invalid name")
            .matches(/^[\p{L} ]+$/u, "Invalid name"),
          email: Yup.string()
            .required("E-mail is required")
            .email("Invalid e-mail"),
          age: Yup.number()
            .required("Age is required")
            .integer("Invalid age")
            .min(16, "Minimum age is 16")
            .max(100, "Maximum age is 100"),
          gender: Yup.string()
            .required("Gender is required")
            .oneOf(["male", "female", "other"], "Invalid gender"),
          field: Yup.string()
            .required("Professional field is required")
            .oneOf(
              ["frontend", "backend", "fullstack", "mobile", "data"],
              "Invalid professional field"
            ),
          technologies: Yup.array()
            .required("Technologies is required")
            .min(1, "Technologies is required"),
          about: Yup.string().notRequired(),
        })}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full name:</label>
            <Field type="text" name="name" />
            <CustomErrorMessage name="name" />

            <label htmlFor="email">E-mail:</label>
            <Field type="email" name="email" />
            <CustomErrorMessage name="email" />

            <label htmlFor="age">Age:</label>
            <Field type="number" name="age" />
            <CustomErrorMessage name="age" />

            <label>Gender:</label>
            <div className="radio-group">
              <label>
                <Field type="radio" name="gender" value="male" /> Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" /> Female
              </label>
              <label>
                <Field type="radio" name="gender" value="other" /> Other
              </label>
            </div>
            <CustomErrorMessage name="gender" />

            <label htmlFor="field">Professional field:</label>
            <Field as="select" name="field">
              <option value="" hidden>
                Selecione...
              </option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
              <option value="mobile">Mobile</option>
              <option value="data">Data Science</option>
            </Field>
            <CustomErrorMessage name="field" />

            <label>Technologies you know:</label>
            <div className="checkbox-group">
              <label>
                <Field type="checkbox" name="technologies" value="html" /> HTML
              </label>
              <label>
                <Field type="checkbox" name="technologies" value="css" /> CSS
              </label>
              <label>
                <Field type="checkbox" name="technologies" value="javascript" />{" "}
                JavaScript
              </label>
              <label>
                <Field type="checkbox" name="technologies" value="python" />{" "}
                Python
              </label>
              <label>
                <Field type="checkbox" name="technologies" value="java" /> Java
              </label>
            </div>
            <CustomErrorMessage name="technologies" />

            <label htmlFor="about">Talk a little about you:</label>
            <Field
              as="textarea"
              name="about"
              rows="5"
              placeholder="Tell about your experiences, projects, etc."
            ></Field>

            <button type="submit">Send</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
