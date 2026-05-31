import express from "express";

import {
  addCertification,
  getCertifications,
  updateCertification,
  deleteCertification,
} from "../controllers/certificationController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addCertification);

router.get("/", protect, getCertifications);

router.put("/:certificationId", protect, updateCertification);

router.delete("/:certificationId", protect, deleteCertification);

export default router;