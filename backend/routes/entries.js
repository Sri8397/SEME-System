const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Entry = require("../models/Entry");
const Vehicle = require("../models/Vehicle");

// ROUTE 1: Get all entries GET: api/entry/getallentries Login required
router.get("/getallentries", fetchUser, async (req, res) => {
  try {
    const entries = await Entry.find({ user: req.user.id });
    res.json(entries);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error occured.");
  }
});

// ROUTE 2: Add new entry POST: api/entries/addentry Login required
router.post("/addentry", fetchUser, async (req, res) => {
  let success = false;
  try {
    const { name, vehicle_number, exit } = req.body;
    const { id } = req.user;

    // Check whether vehicle is registered or not
    let vehicle = await Vehicle.findOne({ vehicle_number, user: req.user.id });
    if (!vehicle) {
      return res
        .status(400)
        .json({ success, msg: "First Register the vehicle." });
    }
    // Check whether vehicle with same vehicle number present or not
    let entry = await Entry.findOne({ vehicle_number, user: id });
    if (entry) {
      return res.status(400).json({
        success,
        msg: "Sorry this vehicle already inside the campus.",
      });
    }
    // Adding entry
    entry = {
      vehicle_id: vehicle._id,
      name,
      vehicle_number,
      exit,
      user: req.user.id,
    };
    const savedEntry = await Entry.create(entry);
    success = true;
    res.json({ success, msg: "Successfully entered in to campus", savedEntry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success, msg: "Internal server error occured." });
  }
});

// ROUTE 3: Delete an existing entry DELETE: api/entries/deleteentry Login required
router.delete("/deleteentry/:id", fetchUser, async (req, res) => {
  let success = false;
  try {
    // Find the entry to be deleted and delete id
    let entry = await Entry.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ success, msg: "Vehicle not found" });
    }
    // Allow deletetion only if user own this entry
    if (entry.user.toString() !== req.user.id) {
      return res.status(401).json({ success, msg: "Not allowed" });
    }
    entry = await Entry.findByIdAndDelete(req.params.id);
    const { vehicle_id, date, exit, name } = entry;

    if (vehicle_id) {
      // Retrieving the vehicle
      let vehicle = await Vehicle.findById(vehicle_id);

      // Update history
      vehicle.history = vehicle.history.concat({ name, entry: date, exit });

      // Update database
      const savedVehicle = await Vehicle.findByIdAndUpdate(
        vehicle_id,
        { $set: vehicle },
        { new: true }
      );
      success = true;
      res.json({ success, msg: "Entry has been deleted", entry, savedVehicle });
    } else {
      success = true;
      res.json({ success, msg: "Entry has been deleted", entry });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success, msg: "Internal server error occured." });
  }
});

module.exports = router;
