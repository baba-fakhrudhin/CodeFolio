import express from "express";

import {
  getCurrentUser,
  updateProfile,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET CURRENT USER
router.get("/me", protect, getCurrentUser);

// UPDATE PROFILE
router.put("/profile", protect, updateProfile);

export default router;