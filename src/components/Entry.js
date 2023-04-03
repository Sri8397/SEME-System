import { Link } from 'react-router-dom'
import { useState } from 'react'


const Entry = () => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [vehicleNumber, setVehicleNumber] = useState()
    const [exitTime, setExitTime] = useState()
    const [exitDate, setExitDate] = useState()

    function handleSubmit() {
        let name = firstName
        if(lastName != undefined) {
            name += " " + lastName
        }
        const data =
        {
            name: name,
            vehicleNumber: vehicleNumber,
            exitTime: exitTime,
            exitDate: exitDate
        }
        let data1 = JSON.parse(localStorage.getItem('entry'))
        if(data1 == null) {
            data1 = []
        }
        data1.push(data)
        localStorage.setItem('entry', JSON.stringify(data1))
    }

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
                <form className='p-3 relative' action='/' onSubmit={handleSubmit}>
                    <div class="form-row row">
                        <div class="col-md-6">
                            <label for="fName">First Name</label>
                            <input type="text" 
                            class="form-control" 
                            placeholder="First name" 
                            id="firstName" 
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                            
                        </div>
                        <div class="col-md-6">
                            <label for="lName">Last Name</label>
                            <input type="text" class="form-control" placeholder="Last name"
                            name="lastName" 
                            onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='form-group mt-3'> 
                        <label for="inputRegNo">Vehicle Number</label>
                        <input type="text" className="form-control" id="inputRegNo" placeholder='BR26AEXXXX'
                        pattern="[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}"
                        onChange={(e) => setVehicleNumber(e.target.value)}
                        required
                        />
                    </div>
                    <div className='form-row row mt-3'>
                        <div className='form-group col-md-6'>
                            <label for="exitDate">Exit Date</label>
                            <input type="date" class="form-control" id="entryDate" aria-describedby="basic-addon3"
                            onChange={(e) => setExitDate(e.target.value)}
                            required
                            />
                        </div>
                        <div className='form-group col-md-6'>
                            <label for="exitTime">Exit Time</label>
                            <input type="time" class="form-control" id="Time" aria-describedby="basic-addon3"
                            onChange={(e) => setExitTime(e.target.value)}
                            required
                            />
                        </div>
                    </div>
                    <div className="grid justify-items-center" >
                    {/* <input type="submit" value="submit"/> */}
                    <input 
                    type="submit"
                    value="ENTRY"
                    class="hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none border-spacing-2 border-2 bg-stone-700 text-stone-100 px-3 py-2 mt-4 rounded-lg"
                    />
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