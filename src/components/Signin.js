import { Link } from 'react-router-dom';
import { useState } from 'react'


const Signin = () => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [vehicleNumber, setVehicleNumber] = useState()
    const [exitTime, setExitTime] = useState()
    const [exitDate, setExitDate] = useState()
    const [address, setAddress] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [zip, setZip] = useState()
    

    function handleSubmit() {
      let name = firstName
      if (lastName !== undefined) {
        name += " " + lastName
      }
      const entryTime = new Date();
      const data =
      {
        name: name,
        vehicleNumber: vehicleNumber,
        address: address,
        city: city,
        state: state,
        zip: zip,
        isBanned: false,
        insideCampus: true,
        TLE: false,
        history: [
          {
            entry: entryTime,
            exitTime: exitTime,
            exitDate: exitDate,
          }
        ]
      }
      const datax =
      {
        name: name,
        vehicleNumber: vehicleNumber,
        exitTime: exitTime,
        exitDate: exitDate
      }
      let data1 = JSON.parse(localStorage.getItem('entry'))
      if (data1 === null) {
        data1 = []
      }
      data1.push(datax)
      localStorage.setItem('entry', JSON.stringify(data1))
  
      let data2 = JSON.parse(localStorage.getItem('tehkikat'))
      if (data2 === null) {
        data2 = []
      }
      data2.push(data)
      localStorage.setItem('tehkikat', JSON.stringify(data2))
    }


  return (
    <div className="mt-2 sm:mt-6 mx-auto w-full max-w-xl border-2 shadow-md border-slate-400 min-h-[60vh]">
      <header
        className="flex flex-row text-center"
        style={{ backgroundColor: "#61C0BF" }}
      >
        <div className="basis-1/2 text-xl font-mono border-b-2 border-slate-600 p-3">
          Entry
        </div>
        <div className="basis-1/2 text-xl font-mono border-b-2 border-slate-600 p-3">
          <Link to="/exit">Exit</Link>
        </div>
      </header>
      <div className="font-mono">
        <form className="p-3" action='/' onSubmit={handleSubmit}>
          <div className="form-row row">
            <div className="col-md-6">
              <label htmlFor="fName">First Name</label>
              <input
                type="text"
               className="form-control"
                id="fName"
                placeholder="First name"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lName">Last Name</label>
              <input
                type="text"
               className="form-control"
                id="lName"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="inputRegNo" required>Registration No</label>
            <input
              type="text"
              className="form-control"
              id="inputRegNo"
              placeholder="BR26AEXXXX"
              pattern="[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}"
              required
              onChange={(e) => setVehicleNumber(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="inputAddress" required>Address</label>
            <input
              type="text"
             className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-row row mt-3">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" 
              onChange={(e) => setCity(e.target.value)}
              required/>
            </div>

            <div className="form-group col-md-3">
              <label htmlFor="inputState">State</label>
              <select id="inputState" className="form-control" 
              defaultValue="Uttar Pradesh"
              onChange={(e) => setState(e.target.value)}
              required
              >
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" 
              required
              onChange={(e) => setZip(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row row mt-3">
            <div className="form-group col-md-6">
              <label htmlFor="entryDate">Exit Date</label>
              <input
                type="date"
               className="form-control"
                id="entryDate"
                aria-describedby="basic-addon3"
                required
                onChange={(e) => setExitDate(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="entryTime">Exit Time</label>
              <input
                type="time"
               className="form-control"
                id="Time"
                aria-describedby="basic-addon3"
                required
                onChange={(e) => setExitTime(e.target.value)}
              />
            </div>
          </div>
          <div className="grid justify-items-center">
              <input 
                type='submit' 
                value='Submit' 
               className="hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none border-spacing-2 border-2 bg-stone-700 text-stone-100 px-3 py-2 mt-4 rounded-lg"
              />
          </div>
        </form>
      </div>
    </div>
    // <div className="" style={styles}>
    //
    //     <div className="card-body">

    //     </div>
    // </div>
  );
};

export default Signin;
