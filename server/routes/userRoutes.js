import express from "express";

import {
  getCurrentUser,
  updateProfile,
  getSkills,
  updateSkills,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET CURRENT USER
router.get("/me", protect, getCurrentUser);

// UPDATE PROFILE
router.put("/profile", protect, updateProfile);

// GET SKILLS
router.get("/skills", protect, getSkills);

// UPDATE SKILLS
router.put("/skills", protect, updateSkills);

export default router;