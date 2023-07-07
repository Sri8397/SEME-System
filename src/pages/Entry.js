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
        const { fname, lname, vehicle_number, exit_date, exit_time } = entry;
        let name = fname.trim();
        if (lname.length > 0) {
            name = name + " " + lname.trim();
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
    };
    return (
        <form className='row g-3' onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="fname" className="form-label">First Name</label>
                <input type="text" value={entry.fname} className="form-control" name="fname" onChange={onChange} minLength="1" />
            </div>
            <div className="col-md-6">
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input type="text" value={entry.lname} className="form-control" name="lname" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="vehicle_number" className="form-label">Vehicle Number</label>
                <input type="text" className="form-control" id="vehicle_number" name="vehicle_number" onChange={onChange} value={entry.vehicle_number} />
            </div>

            <div className="col-md-6">
                <label htmlFor="exit_date" className="form-label">Exit Date</label>
                <input type="date" value={entry.exit_date} onChange={onChange} className="form-control" id="exit_date" name="exit_date" />
            </div>
            <div className="col-md-6">
                <label htmlFor="exit_time" className="form-label">Exit
                    Time</label>
                <input type="time" value={entry.exit_time} onChange={onChange} className="form-control" id="exit_time" name="exit_time" />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
}

export default Entry; 