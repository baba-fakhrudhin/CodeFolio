import express from "express";

import {
  addLanguage,
  getLanguages,
  updateLanguage,
  deleteLanguage,
} from "../controllers/languageController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addLanguage);

router.get("/", protect, getLanguages);

router.put("/:languageId", protect, updateLanguage);

router.delete("/:languageId", protect, deleteLanguage);

export default router;