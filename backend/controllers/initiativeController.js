import Initiative from '../models/Initiative.js';


export const getInitiatives = async (req, res) => {
  try {
    const initiatives = await Initiative.find();
    res.status(200).json(initiatives); 
  } catch (error) {
    console.error("Error fetching initiatives:", error.message);
    res.status(500).json({ message: "Error fetching initiatives", error: error.message });
  }
};

// Get a single initiative by ID
export const getInitiativeById = async (req, res) => {
  const { id } = req.params;  
  try {
    const initiative = await Initiative.findById(id);
    
    if (!initiative) {
      return res.status(404).json({ message: "Initiative not found" });
    }

    res.status(200).json(initiative);  
  } catch (error) {
    console.error("Error fetching initiative:", error.message);
    res.status(500).json({ message: "Error fetching initiative", error: error.message });
  }
};

// Add a new initiative
export const addInitiative = async (req, res) => {
  try {
    const { title, date, msg, image } = req.body;

    if (!title || !date || !msg || !image) {
      return res.status(400).json({ message: "All fields (title, date, msg, image) are required" });
    }

    const newInitiative = new Initiative({ title, date, msg, image });
    await newInitiative.save();

    res.status(201).json({ message: "Initiative added successfully", newInitiative });
  } catch (error) {
    console.error("Error adding initiative:", error.message);
    res.status(500).json({ message: "Error adding initiative", error: error.message });
  }
};