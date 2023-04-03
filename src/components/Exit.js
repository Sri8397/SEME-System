import { Link } from "react-router-dom";
import { useState } from "react";

const Exit = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [vehicleNumber, setVehicleNumber] = useState();
  const [exitTime, setExitTime] = useState();
  const [exitDate, setExitDate] = useState();

  function handleSubmit() {
    let data1 = JSON.parse(localStorage.getItem("entry"));
    let prevDate, prevTime;
    if (data1 != null) {
      data1.forEach(function (item, ind) {
        if (item.vehicleNumber == vehicleNumber) {
          prevDate = item.exitDate;
          prevTime = item.exitTime;
          if(data1.length == 1) {
            data1 = []
          }
          else 
          data1.splice(ind, ind);
        }
      });
    }
    localStorage.setItem("entry", JSON.stringify(data1));
    let fault = false;
    if (prevDate != undefined) {
      if (prevDate < exitDate) {
        fault = true;
      } else if (prevDate == exitDate && prevTime < exitTime) {
        fault = true;
      }
    }
  }

  return (
    <div className="mt-2 mx-auto w-full max-w-xl border-2 shadow-md border-slate-400 min-h-[60vh]">
      <header
        className="flex flex-row text-center"
        style={{ backgroundColor: "#61C0BF" }}
      >
        <div className="basis-1/2 text-xl font-mono border-b-2 border-slate-600 p-3">
          <Link to="/entry">Entry</Link>
        </div>
        <div className="basis-1/2 text-xl font-mono border-b-2 border-slate-600 p-3">
          Exit
        </div>
      </header>
      <body className="font-mono">
        <form className="p-3" action="/" onSubmit={handleSubmit}>
          <div class="form-row row">
            <div class="col-md-6">
              <label for="fName">First Name</label>
              <input
                type="text"
                class="form-control"
                id="fName"
                placeholder="First name"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div class="col-md-6">
              <label for="lName">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="lName"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <label for="inputRegNo">Vehicle Number</label>
            <input
              type="text"
              className="form-control"
              id="inputRegNo"
              placeholder="BR26AEXXXX"
              required
              onChange={(e) => setVehicleNumber(e.target.value)}
            />
          </div>
          <div className="form-row row mt-3">
            <div className="form-group col-md-6">
              <label for="exitDate">Date</label>
              <input
                type="date"
                class="form-control"
                id="exitDate"
                aria-describedby="basic-addon3"
                required
                onChange={(e) => setExitDate(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="exitTime">Time</label>
              <input
                type="time"
                class="form-control"
                required
                aria-describedby="basic-addon3"
                onChange={(e) => setExitTime(e.target.value)}
              />
            </div>
          </div>
          <div className="grid justify-items-center">
            <input 
                type="submit"
                value="EXIT"
                class="hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none border-spacing-2 border-2 bg-stone-700 text-stone-100 px-3 py-2 mt-4 rounded-lg" 
            />
          </div>
        </form>
      </body>
    </div>
  );
};

export default Exit;
