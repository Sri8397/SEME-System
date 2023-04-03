import { Link } from 'react-router-dom'

const Entry = () => {
    return (
        <div className="mt-2 sm:mt-6 mx-auto w-full max-w-xl border-2 shadow-md border-slate-400 min-h-[60vh]">
            <header className='flex flex-row text-center' style={{backgroundColor: "#61C0BF"}}> 
                <div className='basis-1/2 text-xl font-mono border-b-2 border-slate-600 p-3'>Entry</div>
                <div className='basis-1/2 text-xl font-mono border-b-2 border-slate-600 p-3'>
                    <Link to="/exit">
                        Exit
                    </Link>
                </div>
            </header>
            <body className='font-mono'> 
                <form className='p-3 relative'>
                    <div class="form-row row">
                        <div class="col-md-6">
                            <label for="fName">First Name</label>
                            <input type="text" class="form-control" id="fName" placeholder="First name" required/>
                        </div>
                        <div class="col-md-6">
                            <label for="lName">Last Name</label>
                            <input type="text" class="form-control" id="lName" placeholder="Last name" required/>
                        </div>
                    </div>
                    <div className='form-group mt-3'> 
                        <label for="inputRegNo">Registration No</label>
                        <input type="text" className="form-control" id="inputRegNo" placeholder='BR26AEXXXX' required/>
                    </div>
                    <div className='form-row row mt-3'>
                        <div className='form-group col-md-6'>
                            <label for="entryDate">Date</label>
                            <input type="date" class="form-control" id="entryDate" aria-describedby="basic-addon3" required/>
                        </div>
                        <div className='form-group col-md-6'>
                            <label for="entryTime">Time</label>
                            <input type="time" class="form-control" id="Time" aria-describedby="basic-addon3" required/>
                        </div>
                    </div>
                    <div className="grid justify-items-center" >
                        <div><button class="hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none border-spacing-2 border-2 bg-stone-700 text-stone-100 px-3 py-2 mt-4 rounded-lg">
                        Entry
                        </button></div>
                        <div> 
                            <Link to="/signin">New vehicle?</Link>
                        </div>
                    </div>
                </form>
            </body>
        </div>
    );
}

export default Entry; 