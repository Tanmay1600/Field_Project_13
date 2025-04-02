import express from 'express';
import { getInitiatives,getInitiativeById,addInitiative } from '../controllers/initiativeController.js';

const router = express.Router();

router.get("/", getInitiatives);
router.get("/:id", getInitiativeById);
router.post("/", addInitiative);

export default router;
