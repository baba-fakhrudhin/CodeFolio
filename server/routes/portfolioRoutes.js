import express from "express";

import {
  getPublicPortfolio,
} from "../controllers/portfolioController.js";

const router = express.Router();

// GET PUBLIC PORTFOLIO
router.get("/:username", getPublicPortfolio);

export default router;