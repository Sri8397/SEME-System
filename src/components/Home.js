import {Link} from 'react-router-dom'

const Home = () => {
    const styles = {
        margin: "10% 30% 10% 30%"
    }
    return (
        <div className="card text-center" style={styles}>
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <Link className="nav-link" to="/entry"> 
                            Entry
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/exit"> 
                            Exit
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="card-body"> 
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Registration Number" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Owner Name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                </div>
                <div class="input-group mb-3">
                <input type="date" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                </div>

                <div class="input-group mb-3">
                
                <input type="time" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                <span class="input-group-text">.00</span>
                </div>
                <div className='btn btn-primary'> 
                    Entry
                </div>
            </div>
        </div>
    ); 
}

export default Home; 