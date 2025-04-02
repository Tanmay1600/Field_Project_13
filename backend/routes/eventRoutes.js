import express from 'express';
import { getEvents, addEvent, getEventById, deleteEvent } from "../controllers/eventController.js";

const router = express.Router();

router.get("/", getEvents);
router.get("/:id", getEventById);
router.post("/", addEvent);
router.delete("/:id", deleteEvent);

export default router;
