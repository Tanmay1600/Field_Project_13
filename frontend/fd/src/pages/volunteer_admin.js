import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/volunteer_admin.css";

const VolunteerAdmin = () => {
  const [volunteers, setVolunteers] = useState([]);

  const fetchVolunteers = async () => {
    try {
      const res = await axios.get("https://ek-hath-madticha-backend.onrender.com/api/volunteers");
      setVolunteers(res.data);
    } catch (error) {
      console.error("Error fetching volunteers:", error);
    }
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this volunteer?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://ek-hath-madticha-backend.onrender.com/api/volunteers/${id}`);
      setVolunteers(volunteers.filter((vol) => vol._id !== id));
    } catch (error) {
      console.error("Error deleting volunteer:", error);
      alert("Failed to delete volunteer.");
    }
  };

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
      <div className="volunteers-container">
        <h2>Volunteers List</h2>
        {volunteers.length === 0 ? (
          <p>No volunteers found.</p>
        ) : (
          <table className="volunteers-table">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Message</th>
                <th>Registered On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map((vol, index) => (
                <tr key={vol._id}>
                  <td>{index + 1}</td>
                  <td>{vol.firstName} {vol.lastName}</td>
                  <td>{vol.email}</td>
                  <td>{vol.mobile || "N/A"}</td>
                  <td>{vol.message}</td>
                  <td>{new Date(vol.createdAt).toLocaleString()}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(vol._id)}
                      style={{
                        padding: "6px 10px",
                        backgroundColor: "#dc3545",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default VolunteerAdmin;
