import companyModel from "../models/Company.js";

export const createCompany = async (req, res) => {
  try {
    const { name, location, industry, email } = req.body;

    const companyObj = new companyModel({
      name,
      location,
      industry,
      email,
    });

    const savedCompanyObj = await companyObj.save();
    res.json({
      savedCompanyObj,
      message: "Company created successfully ",
    });
  } catch (error) {
    console.log(error);

    res.json({
      error: "Error while creating company",
    });
  }
};


export const getCompanies=async(req,res)=>{
    try {
      const getcompanies=await companyModel.find().lean();
      res.json({
        getcompanies
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }
