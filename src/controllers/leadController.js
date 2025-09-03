const Lead = require("../models/Lead");

//create new lead
const createLead = async(req, res) => {
  try {
    const leadData = req.body;
    const newLead = await Lead.create(leadData);
    res.status(201).json({success: true, data: newLead});
  } catch (err) {
    console.error("Error creating leaad:" ,err.message);
   res.status(500).json({success: false, error: "Server Error"});

    
  }
};

//Get all leads
const getLeads = async(req, res) => {
  try {
    const leads = await Lead.find().sort({createdAt: -1});
    res.status(200).json({success: true, data: leads});
  } catch (err) {
    console.error("Error fetching leads:", err.message);
   res.status(500).json({success: false, error: "Server Error"});

    
  }
};

//update lead
const updateLead = async(req, res) => {
  try {
    const {id} = req.params;
    const updatedLead = await Lead.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if(!updatedLead){
      return res.status(404).json({success: false, error: "Lead not found"});
    }
    res.status(200).json({success: true, data: updatedLead});
  } catch (err) {
  console.error("Error updating lead:", err.message);
  res.status(500).json({success: false, error: "Server Error"});
  }
};

//Delete lead
const deleteLead = async (req, res) => {
  try {
    const{id} = req.params;
    const deletedLead = await Lead.findByIdAndDelete(id);

    if(!deletedLead){
      return res.status(404).json({success: false, error: "Lead not found"});
    }
    res.status(200).json({success: true, message: "Lead deleted successfully"});
  } catch (err) {
    console.error("Error deleting lead:", err.message);
    res.status(500).json({success: false, error: "Server Error"
    });
  }
};

module.exports = {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
}