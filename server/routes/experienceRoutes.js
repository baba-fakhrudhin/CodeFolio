import express from "express";

import {
  addExperience,
  getExperience,
  updateExperience,
  deleteExperience,
} from "../controllers/experienceController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ADD EXPERIENCE
router.post("/", protect, addExperience);

// GET EXPERIENCE
router.get("/", protect, getExperience);

// UPDATE EXPERIENCE
router.put("/:experienceId", protect, updateExperience);

// DELETE EXPERIENCE
router.delete("/:experienceId", protect, deleteExperience);

export default router;