// routes/contactRoutes.js
import express from "express";
import { addContact, getContacts } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", addContact);
router.get("/", getContacts); // Optional

export default router;
