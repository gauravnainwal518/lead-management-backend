const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    phone: {
   type: String,
   required: [true, "Phone number is required"],
    },
    altPhone: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
    },
    altEmail: {
      type: String,
      default: "",
      lowercase:  true,
    },
    status: {
      type: String,
      enum: ["New", "Contacted", "Qualified", "Lost"],
      default: "New",
    },
    qualification: {
      type: String,
      default: "",
    },
    interestField:{
      type: String,
      default: "",
    },
    source: {
    type: String,
    enum: ["Website", "Referral", "Advertisement" ,"Other"],
    default: "Website",
    },
    assignedTo: {
      type: String,
      default: "Unassigned",
    },
    jobInterest: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    passoutYear: {
      type: String,
      default: "",
    },
    heardFrom: {
      type: String,
      default: "",
    },

  },
  {timestamps: true}
);

module.exports = mongoose.model("Lead", leadSchema);