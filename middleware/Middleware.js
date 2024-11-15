import userModel from "../models/User.js";

export const isAdmin = async (req, res, next) => { //It will idicate what are the things that only Admin can do
  // Check if the user is an admin

  try {
    const { email } = req.body;

    const userInfo = await userModel.findOne({ email });
    if (userInfo && userInfo.role === "Admin") {
      next();
      //proceed
    } else {
      res.status(403).json({
        message:
          "Unauthorized access. Only admin users can access this endpoint.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error verifying user role",
    });
  }
};

export const isAlumni = async (req, res, next) => { //It will idicate what are the things that only Alumni can do
  // Check if the user is an Alumni

  try {
    const { email } = req.body;

    const userInfo = await userModel.findOne({ email });
    if (userInfo && userInfo.role === "Alumni") {
      next();
      //proceed
    } else {
      res.status(403).json({
        message:
          "Unauthorized access. Only Alumni can add reviews.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};


// export const isStudent = async (req, res, next) => { //It will idicate what are the things that only Student can do
//   // Check if the user is an Student

//   try {
//     const { email } = req.body;

//     const userInfo = await userModel.findOne({ email });
//     if (userInfo && userInfo.role === "Student") {
//       next();
//       //proceed
//     } else {
//       res.status(403).json({
//         message:
//           "Unauthorized access. You cant access this endpoint.",
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal Server Error",
//     });
//   }
// };
