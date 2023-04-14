import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Entry = () => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [vehicleNumber, setVehicleNumber] = useState()
    const [exitTime, setExitTime] = useState()
    const [exitDate, setExitDate] = useState()
    const navigate = useNavigate();
    
    let prevData = JSON.parse(localStorage.getItem('tehkikat'));
    let prevRAM = JSON.parse(localStorage.getItem('entry'));
    if(prevData == null) prevData = [];
    if(prevRAM == null) prevRAM = [];
    // console.log(prevData);
    // console.log(prevRAM);

    function handleSubmit() {
        // Check input time
        const currentTime = new Date(); 
        const exit = new Date(`${exitDate} ${exitTime}`);
        exit.setSeconds(currentTime.getSeconds());
        if(exit <= currentTime) {
            alert("Please enter correct date and time!");
        }

        // Check whether is it banned or inside the campus
        let present = false, index = -1
        let banned = false, inCampus = false;
        prevData.forEach((element, i) => {
            if(element.vehicleNumber === vehicleNumber) {
                present = true;
                index = i;
                banned = element.isBanned;
                inCampus = element.insideCampus;
            }
        });

        // alert(`${index} ${inCampus} ${present}`);
        // Sign in
        if(present === false) {
            alert(`Vehicle Number ${vehicleNumber} is not registered. Please Register!`);
            navigate('/signin');
        }
        // Check ban
        else if(banned == true) {
            alert(`Vehicle Number ${vehicleNumber} is banned. Don't come again!`);
        }
        
        // Inside the campus
        else if(inCampus === true) {
            alert(`Vehicle Number ${vehicleNumber} is already inside the campus. Duplicate vehicle found. You are banned!`);
            prevData[index].isBanned = true;
        }
        else{
            
            let name = firstName
            if (lastName !== undefined) {
                name += " " + lastName
            }
            prevData[index].history.push({
                name: name, 
                entry: currentTime,
                exit: exit,
            });
            prevRAM.push({
                name: name, 
                exit: exit,
                vehicleNumber: vehicleNumber,
            });
        prevData[index].insideCampus = true;
        localStorage.setItem('tehkikat', JSON.stringify(prevData)); 
        localStorage.setItem('entry', JSON.stringify(prevRAM)); 
        alert(`Added Successfully!`);
        navigate('/');
        }
    }
    return (
        <div className="mt-2 sm:mt-6 mx-auto w-full max-w-xl border-2 shadow-md border-slate-400 min-h-[60vh]">
            <header className='flex flex-row text-center' style={{ backgroundColor: "#61C0BF" }}>
                <div className='basis-1/2 text-xl font-mono border-b-2 border-slate-600 p-3'>Entry</div>
                <div className='basis-1/2 text-xl font-mono border-b-2 border-slate-600 p-3'>
                    <Link to="/exit">
                        Exit
                    </Link>
                </div>
            </header>
            <div className='font-mono'>
                <form className='p-3 relative' onSubmit={handleSubmit}>
                    <div className="form-row row">
                        <div className="col-md-6">
                            <label htmlFor="fName">First Name</label>
                            <input type="text"
                                className="form-control"
                                placeholder="First name"
                                id="firstName"
                                required
                                onChange={(e) => setFirstName(e.target.value)}
                            />

                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lName">Last Name</label>
                            <input type="text" className="form-control" placeholder="Last name"
                                name="lastName"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='form-group mt-3'>
                        <label htmlFor="inputRegNo">Vehicle Number</label>
                        <input type="text" className="form-control" id="inputRegNo" placeholder='BR26AEXXXX'
                            pattern="[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}"
                            onChange={(e) => setVehicleNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-row row mt-3'>
                        <div className='form-group col-md-6'>
                            <label htmlFor="exitDate">Exit Date</label>
                            <input type="date" className="form-control" id="entryDate" aria-describedby="basic-addon3"
                                onChange={(e) => setExitDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className='form-group col-md-6'>
                            <label htmlFor="exitTime">Exit Time</label>
                            <input type="time" className="form-control" id="Time" aria-describedby="basic-addon3"
                                onChange={(e) => setExitTime(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="grid justify-items-center" >
                        {/* <input type="submit" value="submit"/> */}
                        <button
                            className="hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none border-spacing-2 border-2 bg-stone-700 text-stone-100 px-3 py-2 mt-4 rounded-lg"
                        >Entry</button>
                        <div>
                            <Link to="/signin">New vehicle?</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Entry; 