import { Formik, Field } from "formik";
import "./App.css";

function App() {
  return (
    <Formik>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <label for="name">Full name:</label>
          <Field type="text" id="name" name="name" required />

          <label for="email">E-mail:</label>
          <Field type="text" id="email" name="email" required />

          <label for="age">Age:</label>
          <Field type="number" id="age" name="age" min="16" required />

          <label>Gender:</label>
          <div className="radio-group">
            <label>
              <Field type="radio" name="gender" value="masculino" /> Male
            </label>
            <label>
              <Field type="radio" name="gender" value="feminino" /> Female
            </label>
            <label>
              <Field type="radio" name="gender" value="outro" /> Other
            </label>
          </div>

          <label for="field">Professional field:</label>
          <Field as="select" id="field" name="field">
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
            <option value="mobile">Mobile</option>
            <option value="dados">Ciência de Dados</option>
          </Field>

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

          <label for="about">Talk a little about you:</label>
          <Field
            as="textarea"
            id="about"
            name="about"
            rows="5"
            placeholder="Tell about your experiences, projects, etc."
          ></Field>

          <button type="submit">Send</button>
        </form>
      )}
    </Formik>
  );
}

export default App;
