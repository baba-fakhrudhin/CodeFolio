import express from "express";

import {
  addProject,
  getProjects,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ADD PROJECT
router.post("/", protect, addProject);

// GET PROJECTS
router.get("/", protect, getProjects);

// UPDATE PROJECT
router.put("/:projectId", protect, updateProject);

// DELETE PROJECT
router.delete("/:projectId", protect, deleteProject);

export default router;