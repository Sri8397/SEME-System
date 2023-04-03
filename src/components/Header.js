import {Link} from 'react-router-dom'
import logo from '../seme-logo.png'

function Navbar() {
    return (
        <nav className="pl-1 flex text-xl font-mono border-b-slate-200 border-b-2 h-[10vh] align-center " style={{backgroundColor: "#61C0BF"}}>
            <a className="basis-1/2 flex align-center">
                <Link to="/" className="nav-link bg-white">
                <img className="h-[8vh] w-auto" src={logo} />
                </Link>
            </a>
            <a className='basis-1/2 flex justify-end'>
            <a className="ms-auto p-3">
                <Link className="nav-link" to="/entry"> 
                    Entry
                </Link>
            </a>
            <a className="p-3">
                <Link className="nav-link" to="/exit">
                    Exit
                </Link>
            </a>
            <a className="p-3">
                <Link className="nav-link" to="/check">
                    Check
                </Link>
            </a>
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

