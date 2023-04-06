import {Link} from 'react-router-dom'
import logo from '../seme-logo.png'

function Navbar() {
    return (
        <nav className="pl-1 flex text-xl font-mono border-b-slate-200 border-b-2 h-[10vh] " style={{backgroundColor: "#61C0BF"}}>
            <div className="basis-1/2 flex items-center">
                <Link to="/" className="nav-link bg-white">
                <img className="h-[8vh] w-auto" src={logo} />
                </Link>
            </div>
            <div className='basis-1/2 flex items-center justify-end flex-nowrap'>
            <div className="ms-auto p-3">
                <Link className="nav-link" to="/entry"> 
                    Entry
                </Link>
            </div>
            <div className="p-3">
                <Link className="nav-link" to="/exit">
                    Exit
                </Link>
            </div>
            <div className="p-3">
                <Link className="nav-link" to="/check">
                    Check
                </Link>
            </div>
            </div>
            {/* <a className="nav-items mr-10">
                <Link className="nav-link" to="/credits">
                    Credits
                </Link>
            </a> */}
        </nav>
    ); 
}

export default Navbar; 

