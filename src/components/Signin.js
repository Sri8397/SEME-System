import { Link } from "react-router-dom";

const Signin = () => {
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
      <body className="font-mono">
        <form className="p-3">
          <div class="form-row row">
            <div class="col-md-6">
              <label for="fName" required>First Name</label>
              <input
                type="text"
                class="form-control"
                id="fName"
                placeholder="First name"
              />
            </div>
            <div class="col-md-6">
              <label for="lName" required>Last Name</label>
              <input
                type="text"
                class="form-control"
                id="lName"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <label for="inputRegNo" required>Registration No</label>
            <input
              type="text"
              className="form-control"
              id="inputRegNo"
              placeholder="BR26AEXXXX"
            />
          </div>
          <div class="form-group mt-3">
            <label for="inputAddress" required>Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="form-row row mt-3">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" required/>
            </div>
            <div class="form-group col-md-3">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control" required>
                <option selected>Choose...</option>
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
            <div class="form-group col-md-3">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </div>
          <div className="form-row row mt-3">
            <div className="form-group col-md-6">
              <label for="entryDate">Date</label>
              <input
                type="date"
                class="form-control"
                id="entryDate"
                aria-describedby="basic-addon3"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="entryTime">Time</label>
              <input
                type="time"
                class="form-control"
                id="Time"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
          <div className="grid justify-items-center">
            <Link to="/">
              <input type='submit' value='Submit' class="hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none border-spacing-2 border-2 bg-stone-700 text-stone-100 px-3 py-2 mt-4 rounded-lg"/>
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
};

export default Signin;
