import { createContext, useState } from "react";
const vehicleContext = createContext();

const VehicleState = (props) => {
  const host = "http://localhost:8888";
  const entriesInitial = [];
  const [entries, setEntries] = useState(entriesInitial);

  // Get all entries
  const getEntries = async () => {
    // Api call
    const response = await fetch(`${host}/api/entries/getallentries`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setEntries(json);
  };

  // Add an Entry
  const addEntry = async (name, vehicle_number, exit) => {
    // return new Promise(async (resolve, reject) => {
    // Api call
    const response = await fetch(`${host}/api/entries/addentry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ name, vehicle_number, exit }),
    });
    const json = await response.json();
    setEntries(entries.concat(json.savedEntry));
    return json;
  };

  const deleteEntry = async (name, vehicle_number) => {
    // console.log("Deleting a entry with id " + id);
    let id = null;
    entries.forEach((entry) => {
      if (name === entry.name && vehicle_number === entry.vehicle_number) {
        id = entry._id;
      }
    });
    if (id === null) {
      const message = {
        msg: "Entry not found",
        success: false,
      };
      return message;
    }
    const newEntries = entries.filter((entry) => entry._id !== id);
    setEntries(newEntries);
    const response = await fetch(`${host}/api/entries/deleteentry/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    return json;
  };

  const editEntry = () => {};

  return (
    <vehicleContext.Provider
      value={{ entries, addEntry, deleteEntry, editEntry, getEntries }}
    >
      {props.children}
    </vehicleContext.Provider>
  );
};
export { vehicleContext, VehicleState };
