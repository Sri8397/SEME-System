import {Link} from 'react-router-dom'
import logo from '../seme-logo.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg text-xl font-mono border-b-slate-200 border-b-2 h-[10vh]" style={{backgroundColor: "#61C0BF"}}>
            <a className="navbar-brand flex align-center">
                <Link to="/" className="nav-link bg-white">
                <img className="h-[8vh] w-full" src={logo} />
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
                <Link className="nav-link" to="/check">
                    Check
                </Link>
            </a>
            {/* <a className="nav-items mr-10">
                <Link className="nav-link" to="/credits">
                    Credits
                </Link>
            </a> */}
        </nav>
    ); 
}

export default Navbar; 

