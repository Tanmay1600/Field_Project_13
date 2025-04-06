import express from "express";
import { addDonation, getDonations, getDonationById } from "../controllers/donationController.js";

const router = express.Router();

router.post("/", addDonation);
router.get("/", getDonations);
router.get("/:id", getDonationById);

export default router;
