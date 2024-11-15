import {
  createAdmin,
  createAlumni,
  createStudent,
  getAllUsers,
} from "../controllers/userController.js";

import {
  createCompany,
  getCompanies,
} from "../controllers/companyController.js";
import {
  createReview,
  getAllReviews,
} from "../controllers/reviewController.js";
import { likeReviews } from "../controllers/likeController.js";

import express from "express";
import { isAdmin, isAlumni } from "../middleware/Middleware.js";

const router = express.Router();

router.post("/student/create", createStudent);
router.post("/alumni/create", createAlumni);
router.post("/admin/create", createAdmin);
router.post("/company/create", isAdmin, createCompany); //Only for admin to be able to create a company
router.post("/review/create", isAlumni, createReview); //Only for alumni to be able to give review to the company
router.post("/like/add", likeReviews);

router.get("/getAllUsers/get", getAllUsers);
router.get("/company/get", getCompanies);

export default router;
