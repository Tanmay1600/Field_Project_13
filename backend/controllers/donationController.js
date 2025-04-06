import Donation from "../models/Donation.js";

// Add a new donation
export const addDonation = async (req, res) => {
  try {
    const { fullName, mobile, email, image, message } = req.body;

    if (!fullName || !mobile || !email || !message) {
      return res.status(400).json({ message: "All fields except image are required" });
    }

    const newDonation = new Donation({ fullName, mobile, email, image, message });
    await newDonation.save();

    res.status(201).json({ message: "Donation added successfully", newDonation });
  } catch (error) {
    res.status(500).json({ message: "Error adding donation", error });
  }
};

// Get all donations
export const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching donations", error });
  }
};

// Get single donation by ID
export const getDonationById = async (req, res) => {
  const { id } = req.params;
  try {
    const donation = await Donation.findById(id);

    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    res.status(200).json(donation);
  } catch (error) {
    res.status(500).json({ message: "Error fetching donation", error });
  }
};
