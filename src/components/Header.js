import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg text-xl font-mono border-b-slate-200 border-b-2" style={{backgroundColor: "#61C0BF"}}>
            <a className="navbar-brand ms-3">
                <Link to="/" className="nav-link">
                    SEME
                </Link>
            </a>
            <a className="nav-items ms-auto mr-10">
                <Link className="nav-link" to="/entry"> 
                    Entry
                </Link>
            </a>
            <a className="nav-items mr-10">
                <Link className="nav-link" to="/exit">
                    Exit
                </Link>
            </a>
            <a className="nav-items mr-10">
                <Link className="nav-link" to="/exit">
                    Check
                </Link>
            </a>
            <a className="nav-items mr-10">
                <Link className="nav-link" to="/credits">
                    Credits
                </Link>
            </a>
        </nav>
    ); 
}

export default Navbar; 

