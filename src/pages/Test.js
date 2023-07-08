import { useNavigate } from "react-router-dom";

function Test() {
    const navigate = useNavigate(); 
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target; 
        let valid = true; 
        Array.from(form).forEach(ele => {
            if (!ele.checkValidity()) {
                form.classList.add('was-validated'); 
                valid = false; 
            }
        });
        if (valid) {
            navigate('/login'); 
        }
    }
    return (
        <div className='container'>
            <form className="row g-3" onSubmit={handleSubmit} noValidate>
                <div className="col-md-4">
                    <label htmlFor="fname" className="form-label">First name</label>
                    <input type="text" className="form-control" id="fname" checkValidity required />
                    
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">City</label>
                    <input type="text" className="form-control" id="validationCustom03" required checkValidity />
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="validationCustom05" required="" />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>

    )
}

export default Test
