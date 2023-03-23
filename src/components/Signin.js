import { Link } from 'react-router-dom'

const Signin = () => {
    const styles = {
        margin: "10% auto 10% auto", 
        maxWidth: "480px", 
    }
    return (

        <div class="rounded-b border-2 border-slate-400" style={styles}>
            <header className='flex flex-row text-center' style={{backgroundColor: "#61C0BF"}}> 
                <div className='basis-1/2 text-xl font-mono border-b-2 border-slate-600 p-3'>Entry</div>
                <div className='basis-1/2 text-xl font-mono border-b-2 border-slate-600 p-3'>
                    <Link to="/exit">
                        Exit
                    </Link>
                </div>
            </header>
            <body className= 'font-mono'> 
                <form className='p-3'>
                    <div class="form-row row">
                        <div class="col-md-6">
                            <label for="fName">First Name</label>
                            <input type="text" class="form-control" id="fName" placeholder="First name"/>
                        </div>
                        <div class="col-md-6">
                            <label for="lName">Last Name</label>
                            <input type="text" class="form-control" id="lName" placeholder="Last name"/>
                        </div>
                    </div>
                    <div className='form-group mt-3'> 
                        <label for="inputRegNo">Registration No</label>
                        <input type="text" className="form-control" id="inputRegNo" placeholder='BR26AEXXXX'/>
                    </div>
                    <div class="form-group mt-3">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="form-row row mt-3">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputState">State</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>Arunachal Pradesh</option>
                                <option>Andhra Pradesh</option>
                                <option>Bihar</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip" />
                        </div>    
                    </div>
                    <div className='form-row row mt-3'>
                        <div className='form-group col-md-6'>
                            <label for="entryDate">Date</label>
                            <input type="date" class="form-control" id="entryDate" aria-describedby="basic-addon3"/>
                        </div>
                        <div className='form-group col-md-6'>
                            <label for="entryTime">Time</label>
                            <input type="time" class="form-control" id="Time" aria-describedby="basic-addon3"/>
                        </div>
                    </div>
                    <div className="grid justify-items-center" >
                        <Link to="/"><button class="hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none border-spacing-2 border-2 bg-stone-700 text-stone-100 px-3 py-2 mt-4 rounded-lg">
                        Submit
                        </button>
                        </Link>
                    </div>
                </form>
            </body>
        </div>
        // <div className="" style={styles}>
        //     
        //     <div className="card-body">
                
        //     </div>
        // </div>
    );
}

export default Signin; 