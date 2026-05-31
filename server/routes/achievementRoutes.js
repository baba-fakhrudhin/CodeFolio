import express from "express";

import {
  addAchievement,
  getAchievements,
  updateAchievement,
  deleteAchievement,
} from "../controllers/achievementController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ADD ACHIEVEMENT
router.post("/", protect, addAchievement);

// GET ACHIEVEMENTS
router.get("/", protect, getAchievements);

// UPDATE ACHIEVEMENT
router.put("/:achievementId", protect, updateAchievement);

// DELETE ACHIEVEMENT
router.delete("/:achievementId", protect, deleteAchievement);

export default router;