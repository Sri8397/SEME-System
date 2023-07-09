import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { vehicleContext } from '../context/VehicleState';
import { alertContext } from '../context/AlertState';

const Exit = () => {
    const context = useContext(vehicleContext);
    const { deleteEntry } = context;
    const alert_context = useContext(alertContext);
    const { showAlert } = alert_context;

    const navigate = useNavigate();
    const [detail, setDetail] = useState({ fname: "", lname: "", vehicle_number: "" });

    const onChange = (e) => {
        setDetail({ ...detail, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        for (const key in detail) {
            if (typeof detail[key] === 'string')
                detail[key] = detail[key].trim();
        }
        const form = e.target;
        form.classList.add('was-validated');
        let valid = true;
        Array.from(form).forEach(ele => {
            if (!ele.checkValidity()) {
                valid = false;
            }
        });
        if (valid) {
            const { fname, lname, vehicle_number } = detail;
            let name = fname;
            if (lname.length > 0) {
                name = fname + " " + lname;
            }
            const json = await deleteEntry(name, vehicle_number, vehicle_number);
            if (json.success) {
                navigate('/');
                showAlert("Vehicle exit successfully", 'success');
            }
            else {
                showAlert(json.msg, 'danger');
            }
        }
    };

    return (
        <form className='row g-3' onSubmit={handleSubmit} noValidate>
            <div className="col-md-6">
                <label htmlFor="fname" className="form-label">First Name</label>
                <input type="text" value={detail.fname} className="form-control" name="fname" onChange={onChange}
                    required />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input type="text" value={detail.lname} className="form-control" name="lname" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="vehicle_number" className="form-label">Vehicle Number</label>
                <input type="text" className="form-control" id="vehicle_number" name="vehicle_number" onChange={onChange} value={detail.vehicle_number}
                    pattern="[A-Za-z0-9]{10}" required />
                <div className="invalid-feedback">
                    Please provide a vehicle number eg.JH09BG0976.
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
}

export default Exit; 