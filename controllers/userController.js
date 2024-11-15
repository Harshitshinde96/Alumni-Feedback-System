import User from "../models/User.js";

export const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({
      // User named object is created
      name,
      email,
      password,
      role: "Admin",
    });

    const savedUser = await user.save();
    res.json({
      savedUser,
      message: "User created successfully as an Admin",
    });
  } catch (error) {
    res.json({
      error: "Error saving user",
    });

    console.log(error);
  }
};

export const createAlumni = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({
      // User named object is created
      name,
      email,
      password,
      role: "Alumni",
    });

    const savedUser = await user.save();
    res.json({
      savedUser,
      message: "User created successfully as an Alumni",
    });
  } catch (error) {
    res.json({
      error: "Error saving user",
    });
    console.log(error);

  }
};

export const createStudent = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({
      // User named object is created
      name,
      email,
      password,
      role: "Student",
    });

    const savedUser = await user.save();
    res.json({
      savedUser,
      message: "User created successfully as a Student",
    });
  } catch (error) {
    res.json({
      error: "Error saving user",
    });

    console.log(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json({
      getUsers,
    });
  } catch (error) {
    res.json({
      getUsers,
      error: "Cannot Fetch data ",
    });
    console.log(error);
  }
};
