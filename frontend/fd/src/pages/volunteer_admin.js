import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/volunteer_admin.css"; // Assuming you have a CSS file for styling

const VolunteerAdmin = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/volunteers");
        setVolunteers(res.data);
      } catch (error) {
        console.error("Error fetching volunteers:", error);
      }
    };

    fetchVolunteers();
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
