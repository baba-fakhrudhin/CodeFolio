import express from "express";

import {
  addPublication,
  getPublications,
  updatePublication,
  deletePublication,
} from "../controllers/publicationController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ADD PUBLICATION
router.post("/", protect, addPublication);

// GET PUBLICATIONS
router.get("/", protect, getPublications);

// UPDATE PUBLICATION
router.put("/:publicationId", protect, updatePublication);

// DELETE PUBLICATION
router.delete("/:publicationId", protect, deletePublication);

export default router;