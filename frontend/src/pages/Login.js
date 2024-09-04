import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { alertContext } from "../context/AlertState";
import logo from "../seme-logo.png";

function Login() {
  const context = useContext(alertContext);
  const { showAlert } = context;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const onSubmit = async (e) => {
    e.preventDefault();
    for (const key in credentials) {
      if (typeof credentials[key] === "string")
        credentials[key] = credentials[key].trim();
    }
    const form = e.target;
    form.classList.add("was-validated");
    let valid = true;
    Array.from(form).forEach((ele) => {
      if (!ele.checkValidity()) {
        valid = false;
      }
    });
    if (valid) {
      const response = await fetch(`http://localhost:8888/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      // console.log(json);
      if (json.success === true) {
        // Save the auth token and redirect
        localStorage.setItem("token", json.authToken);
        showAlert("Login Successfully", "success");
        navigate("/");
      } else {
        console.log(json);
        showAlert(json.msg, "danger");
      }
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <img
        className="rounded"
        style={{ maxWidth: "50%" }}
        src={logo}
        alt="seme logo"
      />
      <form className="g-3" onSubmit={onSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            value={credentials.email}
            aria-describedby="emailHelp"
            required
          />
          <div className="invalid-feedback">Please provide a valid email.</div>
          <div id="email" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={credentials.password}
            onChange={onChange}
            className="form-control"
            id="password"
            name="password"
            minLength="5"
            required
          />
          <div className="invalid-feedback">Aleast 5 character long.</div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
