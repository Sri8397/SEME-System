import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../seme-logo.png'
import { alertContext } from '../context/AlertState';
import { useContext } from 'react';
import Alert from './Alert';

function Navbar() {
    const location = useLocation();
    const context = useContext(alertContext);
    const { alert } = context;
    
    const navigate = useNavigate(); 
    const handleLogout = () => {
        localStorage.removeItem('token'); 
        navigate('/login'); 
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" >
                        <img src={logo} alt="Logo" style={{ height: "52px", width: 'auto' }} className="" />
                    </Link>
                    <button className="bg-dark navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item fs-5">
                                <Link className={`nav-link ${location.pathname === './entry' ? "active" : ""}`} to="/entry">Entry</Link>
                            </li>
                            <li className="nav-item fs-5">
                                <Link className={`nav-link ${location.pathname === './exit' ? "active" : ""}`} to="/exit">Exit</Link>
                            </li>
                            <li className="nav-item fs-5">
                                <Link className={`nav-link ${location.pathname === './addvehicle' ? "active" : ""}`} to="/addvehicle">New Vehicle</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? <form className="d-flex">
                            <Link className="btn btn-primary mx-1" to="/login" type="submit">Login</Link>
                            <Link className="btn btn-primary mx-1" to="/signup" type="submit">SignUp</Link></form>
                            : <button onClick={handleLogout} className="btn btn-primary mx-3">Logout</button>
                        }
                    </div>
                </div>
            </nav>
            <Alert alert={alert} />
        </div>
    );
}

export default Navbar;

