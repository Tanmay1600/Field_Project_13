import Event from "../models/Event.js";

// Fetch all events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find(); 
    res.status(200).json(events); 
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

// Fetch event by ID
export const getEventById = async (req, res) => {
  const { id } = req.params; 
  try {
    const event = await Event.findById(id);  

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(event);  
  } catch (error) {
    res.status(500).json({ message: "Error fetching event", error });
  }
};

// Add a new event
export const addEvent = async (req, res) => {
  try {
    const { eventName, dateTime, msg } = req.body;

    if (!eventName || !dateTime || !msg) {
      return res.status(400).json({ message: "Event name, dateTime, and msg are required" });
    }

    const newEvent = new Event({ eventName, dateTime, msg });  
    await newEvent.save();  

    res.status(201).json({ message: "Event added successfully", newEvent });
  } catch (error) {
    res.status(500).json({ message: "Error adding event", error });
  }
};

// Delete an event by ID
export const deleteEvent = async (req, res) => {
  const { id } = req.params;  
  try {
    const event = await Event.findByIdAndDelete(id); 

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Event deleted successfully" });  
  } catch (error) {
    res.status(500).json({ message: "Error deleting event", error });
  }
};
