import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import { protectedRoute } from "../controllers/testController.js";

const router = express.Router();

router.get("/protected", protect, protectedRoute);

export default router;