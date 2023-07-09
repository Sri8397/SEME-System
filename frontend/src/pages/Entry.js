import { useContext, useState } from 'react'
import { vehicleContext } from '../context/VehicleState';
import { alertContext } from '../context/AlertState';
import { useNavigate } from 'react-router-dom';

const Entry = () => {
    // for navigation 
    const navigate = useNavigate();

    // using alerts 
    const context = useContext(vehicleContext);
    const { addEntry } = context;
    const alert_context = useContext(alertContext);
    const { showAlert } = alert_context;

    const [entry, setEntry] = useState({ fname: "", lname: "", vehicle_number: "", exit_date: "", exit_time: "" });

    const onChange = (e) => {
        setEntry({ ...entry, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        for (const key in entry) {
            if (typeof entry[key] === 'string')
                entry[key] = entry[key].trim();
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
            const { fname, lname, vehicle_number, exit_date, exit_time } = entry;
            let name = fname;
            if (lname.length > 0) {
                name = name + " " + lname;
            }
            const exit = new Date(`${exit_date} ${exit_time}`);
            const json = await addEntry(name, vehicle_number, exit);
            console.log(json);
            if (json.success === true) {
                showAlert("Vehicle entered into the campus", 'success');
                navigate('/');
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
                <input type="text" value={entry.fname} className="form-control" name="fname" onChange={onChange} required />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input type="text" value={entry.lname} className="form-control" name="lname" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="vehicle_number" className="form-label">Vehicle Number</label>
                <input type="text" className="form-control" id="vehicle_number" name="vehicle_number" pattern='[A-Za-z0-9]{10}' onChange={onChange} value={entry.vehicle_number} required />
                <div className="invalid-feedback">
                Please provide a vehicle number eg.JH09BG0976.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="exit_date" className="form-label">Exit Date</label>
                <input type="date" value={entry.exit_date} onChange={onChange} className="form-control" id="exit_date" name="exit_date" required />
                <div className="invalid-feedback">
                    Please provide a valid exit date.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="exit_time" className="form-label">Exit
                    Time</label>
                <input type="time" value={entry.exit_time} onChange={onChange} className="form-control" id="exit_time" name="exit_time" required />
                <div className="invalid-feedback">
                    Please provide a valid exit time.
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
}

export default Entry; 