// controllers/contactController.js
import Contact from "../models/Contact.js";

// Add new contact
export const addContact = async (req, res) => {
  try {
    const { firstName, lastName, email, mobile, message } = req.body;

    if (!firstName || !lastName || !email || !mobile || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new Contact({ firstName, lastName, email, mobile, message });
    await newContact.save();

    res.status(201).json({ message: "Contact submitted successfully", newContact });
  } catch (error) {
    res.status(500).json({ message: "Error submitting contact", error });
  }
};

// Get all contacts (optional)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts", error });
  }
};
