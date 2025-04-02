import express from "express";
import { getVolunteers, getVolunteerById, addVolunteer } from "../controllers/volunteerController.js";

const router = express.Router();

router.get("/", getVolunteers); 
router.get("/:id", getVolunteerById);  
router.post("/", addVolunteer);  

export default router;
