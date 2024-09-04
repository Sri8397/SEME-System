const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Vehicle = require("../models/Vehicle");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get all vehicles GET: api/vehicles/getallvehicles Login required
router.get("/getallvehicles", fetchUser, async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ user: req.user.id });
    res.json(vehicles);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error occured.");
  }
});

// ROUTE 2: Add new vehicles POST: api/vehicles/addvehicle Login required
router.post(
  "/addvehicle",
  [body("name", "Atleast 3 letters").isLength({ min: 3 })],
  fetchUser,
  async (req, res) => {
    try {
      // If there are error then return bad requests and errors
      let success = false;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success, error: errors.array() });
      }
      // Check whether vehicle with same vehicle number present or not
      const { name, address, vehicle_number, state, city, pincode } = req.body;
      let vehicle = await Vehicle.findOne({
        vehicle_number: vehicle_number,
        user: req.user.id,
      });
      if (vehicle) {
        return res
          .status(400)
          .json({ success, msg: "Sorry this vehicle already exits" });
      }
      vehicle = {
        name,
        address,
        state,
        city,
        vehicle_number,
        pincode,
        user: req.user.id,
      };
      const savedVehicle = await Vehicle.create(vehicle);
      // make success true
      success = true;
      res.json({ success, savedVehicle });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success, msg: "Internal server error occured." });
    }
  }
);

module.exports = router;
