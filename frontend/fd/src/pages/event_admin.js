import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/event_admin.css"; // Assuming you have a CSS file for styling

const EventAdmin = () => {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    eventName: "",
    dateTime: "",
    msg: "",
  });

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      console.log("API response:", res.data);  // <-- Add this line
      if (Array.isArray(res.data)) {
        setEvents(res.data);
      } else {
        setEvents([]);
        console.error("Expected array, but got:", res.data);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      setEvents([]);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      fetchEvents(); // Refresh the list
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/events/", formData);
      setFormData({ eventName: "", dateTime: "", msg: "" });
      setShowForm(false);
      fetchEvents();
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar">
        <h2>NGO Admin</h2>
        <nav>
          <a href="/admin/volunteers">Volunteers</a>
          <a href="/admin/donations">Donations</a>
          <a href="/admin/events">Events</a>
          <a href="/admin/contacts">Contact</a>
        </nav>
      </div>

      <div className="events-container">
        <h2>Events</h2>

        <button className="add-event-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close Form" : "Add Event"}
        </button>

        {showForm && (
          <form className="event-form" onSubmit={handleAddEvent}>
            <input
              type="text"
              placeholder="Event Name"
              value={formData.eventName}
              onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
              required
            />
            <input
              type="date"
              value={formData.dateTime}
              onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
              required
            />
            <textarea
              placeholder="Event Description"
              value={formData.msg}
              onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        )}

        <table className="events-table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Event Name</th>
              <th>Date</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((ev, index) => (
              <tr key={ev._id}>
                <td>{index + 1}</td>
                <td>{ev.eventName}</td>
                <td>{new Date(ev.dateTime).toLocaleDateString()}</td>
                <td>{ev.msg}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(ev._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {events.length === 0 && <p>No events found.</p>}
      </div>
    </div>
  );
};

export default EventAdmin;
