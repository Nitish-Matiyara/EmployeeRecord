const express = require("express");
const router = express.Router();
const Employee = require("../models/employeeModel");

//--CREATE Employee
router.post("/", async (req, res) => {
  try {
    const createEmployee = new Employee(req.body);
    const addEmployee = await createEmployee.save();
    res.status(201).send(addEmployee);
  } catch (err) {
    res.status(500).send(err);
  }
});

//--READ all Employee's
router.get("/", async (req, res) => {
  try {
    const employeeRecords = await Employee.find();
    res.status(200).send(employeeRecords);
  } catch (err) {
    res.status(500).send(err);
  }
});

//--READ a particular Employee by Id
router.get("/:id", async (req, res) => {
  try {
    const getEmployee = await Employee.findById(req.params.id);
    res.status(201).send(getEmployee);
  } catch (err) {}
});

//--Update a particular Employee by Id
router.patch("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateEmployee = await Employee.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updateEmployee);
  } catch (err) {
    res.status(500).send(err);
  }
});


//--Delete employee by Id
router.delete("/:id", async (req, res) => {
  try {
    const deleteEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      res.status(400).send("Invalid id");
    }
    res.send(deleteEmployee);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
