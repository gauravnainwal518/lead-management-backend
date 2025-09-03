const express = require("express");

const {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
} = require("../controllers/leadController");

const router = express.Router();

//create a new lead
router.post("/", createLead);

//Get all leads
router.get("/", getLeads);

//update a lead by ID
router.put("/:id",updateLead);

//Delete a lead by ID
router.delete("/:id", deleteLead);

module.exports = router;