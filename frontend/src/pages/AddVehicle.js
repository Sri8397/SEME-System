import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import StateOptions from "../utils/StateOptions";
import { alertContext } from "../context/AlertState";

const AddVehicle = () => {
  // for alert
  const context = useContext(alertContext);
  const { showAlert } = context;

  const [credentials, setCredentials] = useState({
    fname: "",
    lname: "",
    address: "",
    vehicle_number: "",
    city: "",
    state: "",
    pincode: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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
      const { fname, lname, vehicle_number, address, city, state, pincode } =
        credentials;
      let name = fname;
      if (lname.length > 0) {
        name = fname + " " + lname;
      }
      const response = await fetch(
        `http://localhost:8888/api/vehicles/addvehicle`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({
            name,
            address,
            city,
            vehicle_number,
            state,
            pincode,
          }),
        }
      );
      const json = await response.json();
      if (json.success === true) {
        showAlert("Vehicle registration completed.", "success");
        navigate("/entry");
      } else {
        showAlert(json.msg, "danger");
      }
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form className="row g-3" noValidate onSubmit={handleSubmit}>
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
      <div className="col-12">
        <label htmlFor="vehicle_number" className="form-label">
          Vehicle Number
        </label>
        <input
          type="text"
          className="form-control"
          value={credentials.vehicle_number}
          name="vehicle_number"
          onChange={onChange}
          pattern="[A-Za-z0-9]{10}"
          required
        />
        <div className="invalid-feedback">
          Please provide a vehicle number eg.JH09BG0976.
        </div>
      </div>
      <div className="col-12">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          value={credentials.address}
          name="address"
          onChange={onChange}
          required
        />
        <div className="invalid-feedback">Please provide a address.</div>
      </div>
      <div className="col-md-6">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          value={credentials.city}
          name="city"
          onChange={onChange}
          required
        />
        <div className="invalid-feedback">Please provide a city.</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="state" className="form-label">
          State
        </label>
        <select
          name="state"
          className="form-select"
          value={credentials.state}
          onChange={onChange}
          required
        >
          <option>Choose...</option>
          <StateOptions />
        </select>
        <div className="invalid-feedback">Please provide a state.</div>
      </div>
      <div className="col-md-2">
        <label htmlFor="pincode" className="form-label">
          Zip
        </label>
        <input
          type="number"
          className="form-control"
          value={credentials.pincode}
          name="pincode"
          onChange={onChange}
          required
        />
        <div className="invalid-feedback">Please provide a zip.</div>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddVehicle;
