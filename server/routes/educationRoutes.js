import express from "express";

import {
  addEducation,
  getEducation,
  updateEducation,
  deleteEducation,
} from "../controllers/educationController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ADD EDUCATION
router.post("/", protect, addEducation);

// GET EDUCATION
router.get("/", protect, getEducation);

// UPDATE EDUCATION
router.put("/:educationId", protect, updateEducation);

// DELETE EDUCATION
router.delete("/:educationId", protect, deleteEducation);

export default router;