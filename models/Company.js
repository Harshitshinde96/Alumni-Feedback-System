import mongoose from "mongoose";
const companySchema = new mongoose.Schema({
  name: {   //Company name
    type: String,
    required: true,
    unique: true,
  },
  location: String,
  industry: String,
  email: {  
    type: String,
    required: true,
  },
  reviews: [ //Review
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});
const companyModel = mongoose.model("Company", companySchema);
export default companyModel;
