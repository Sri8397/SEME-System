import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { alertContext } from "../context/AlertState";
import logo from "../seme-logo.png";

function Signup() {
  const port = "http://localhost:8888";
  const context = useContext(alertContext);
  const { showAlert } = context;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirm_password: "",
  });
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
      const { fname, lname, email, password, confirm_password } = credentials;
      if (password !== confirm_password) {
        return showAlert("Password doesn't match", "danger");
      }
      let name = fname;
      if (lname.length > 0) {
        name = name + " " + lname;
      }
      const response = await fetch(`${port}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const json = await response.json();
      if (json.success === true) {
        // save the token and redirect
        localStorage.setItem("token", json.authToken);
        showAlert("Account created Successfully", "success");
        navigate("/");
      } else {
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
      <form className="row g-3" onSubmit={onSubmit} noValidate>
        <div className="col-md-6">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            value={credentials.fname}
            className="form-control"
            name="fname"
            onChange={onChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            value={credentials.lname}
            className="form-control"
            name="lname"
            onChange={onChange}
          />
        </div>
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
            minLength="5"
            required
            name="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            value={credentials.confirm_password}
            onChange={onChange}
            className="form-control"
            id="confirm_password"
            minLength="5"
            required
            name="confirm_password"
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
