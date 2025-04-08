import Volunteer from "../models/Volunteer.js";

// Fetch all volunteers
export const getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching volunteers", error });
  }
};

export const getVolunteerById = async (req, res) => {
    const { id } = req.params; 
    try {
      const volunteer = await Volunteer.findById(id); 
  
      if (!volunteer) {
        return res.status(404).json({ message: "Volunteer not found" });
      }
  
      res.status(200).json(volunteer);  
    } catch (error) {
      console.error("Error fetching volunteer:", error.message);
      res.status(500).json({ message: "Error fetching volunteer", error: error.message });
    }
  };

// Add a new volunteer
export const addVolunteer = async (req, res) => {
  try {
    const { firstName, lastName, email, mobile, message } = req.body;

    if (!firstName || !lastName || !email || !mobile || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newVolunteer = new Volunteer({ firstName, lastName, email, mobile, message });
    await newVolunteer.save();

    res.status(201).json({ message: "Volunteer added successfully", newVolunteer });
  } catch (error) {
    res.status(500).json({ message: "Error adding volunteer", error });
  }
};
export const deleteVolunteer = async (req, res) => {
  const { id } = req.params;
  console.log(`Received request to delete volunteer with ID: ${id}`);

  try {
    const volunteer = await Volunteer.findByIdAndDelete(id);

    if (!volunteer) {
      console.log(`No volunteer found with ID: ${id}`);
      return res.status(404).json({ message: "Volunteer not found" });
    }

    console.log(`Volunteer deleted successfully:`, volunteer);
    res.status(200).json({ message: "Volunteer deleted successfully" });
  } catch (error) {
    console.error("Error deleting volunteer:", error);
    res.status(500).json({ message: "Error deleting volunteer", error });
  }
};
