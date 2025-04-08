import express from "express";
import { getVolunteers, getVolunteerById, addVolunteer ,deleteVolunteer} from "../controllers/volunteerController.js";

const router = express.Router();

router.get("/", getVolunteers); 
router.get("/:id", getVolunteerById);  
router.post("/", addVolunteer);  
router.delete("/:id", deleteVolunteer);

export default router;
