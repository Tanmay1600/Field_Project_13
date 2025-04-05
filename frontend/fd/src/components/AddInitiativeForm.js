import React, { useState } from "react";

const AddInitiativeForm = ({ onInitiativeAdded }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [msg, setMsg] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newInitiative = { title, date, msg, image };

    try {
      const response = await fetch("http://localhost:3000/initiatives", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newInitiative),
      });

      if (response.ok) {
        const result = await response.json();
        onInitiativeAdded(result.newInitiative); // Update initiatives in Home
        setTitle("");
        setDate("");
        setMsg("");
        setImage("");
      } else {
        console.error("Failed to add initiative");
      }
    } catch (error) {
      console.error("Error adding initiative:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="initiative-form">
      <h2>Add a New Initiative</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <textarea placeholder="Message" value={msg} onChange={(e) => setMsg(e.target.value)} required></textarea>
      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
      <button type="submit">Add Initiative</button>
    </form>
  );
};

export default AddInitiativeForm;
