import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import StateOptions from "../utils/StateOptions";
import { alertContext } from '../context/AlertState';

const AddVehicle = () => {
    // for alert
    const context = useContext(alertContext);
    const { showAlert } = context;
    
    const [credentials, setCredentials] = useState({ fname: "", lname: "", address: "", vehicle_number: "", city: "", state: "", pincode: "" });
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fname, lname, vehicle_number, address, city, state, pincode } = credentials;
        let name = fname;
        if (lname.length > 0) {
            name = fname + ' ' + lname;
        }
        const response = await fetch(`http://localhost:4000/api/vehicles/addvehicle`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ name, address, city, vehicle_number, state, pincode })
        });
        const json = await response.json();
        if (json.success === true) {
            showAlert("Vehicle registration completed.", "success");
            navigate('/entry');
        }
        else {
            showAlert(json.msg, "danger");
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="fname" className="form-label">First Name</label>
                <input type="text" value={credentials.fname} className="form-control" name="fname" onChange={onChange}
                    required minLength="1" />
            </div>
            <div className="col-md-6">
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input type="text" value={credentials.lname} className="form-control" name="lname" onChange={onChange} />
            </div>
            <div className="col-12">
                <label htmlFor="vehicle_number" className="form-label">Vehicle Number</label>
                <input type="text" className="form-control" value={credentials.vehicle_number} name="vehicle_number" required onChange={onChange} />
            </div>
            <div className="col-12">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" value={credentials.address} name="address" placeholder="1234 Main St" onChange={onChange} />
            </div>
            <div className="col-md-6">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" value={credentials.city} name="city" onChange={onChange} />
            </div>
            <div className="col-md-4">
                <label htmlFor="state" className="form-label">State</label>
                <select name="state" className="form-select" value={credentials.state} onChange={onChange}>
                    <option defaultValue>Choose...</option>
                    <StateOptions />
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="pincode" className="form-label">Zip</label>
                <input type="text" className="form-control" value={credentials.pincode} name="pincode" onChange={onChange} />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
};

export default AddVehicle;
