import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { alertContext } from '../context/AlertState';
import logo from '../seme-logo.png'

function Login() {
    const context = useContext(alertContext); 
    const {showAlert} = context;
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({email: "", password: ""}); 
    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:4000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        // console.log(json);
        if (json.success === true) {
            // Save the auth token and redirect 
            localStorage.setItem('token', json.authToken); 
            showAlert("Login Successfully", "success"); 
            navigate('/'); 
        }
        else {
            console.log(json); 
            showAlert("Invalid Credentials", "danger"); 
        }
    }
    
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <img src={logo} alt='seme logo' />
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={onChange} value={credentials.email} aria-describedby="emailHelp" />
                    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={credentials.password} onChange={onChange} className="form-control" id="password" name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
