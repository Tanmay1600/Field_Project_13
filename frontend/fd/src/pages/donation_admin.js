import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/volunteer_admin.css"; // Reusing the same styles

const DonationAdmin = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/donations/");
        setDonations(res.data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
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
        <h2>Donations List</h2>
        {donations.length === 0 ? (
          <p>No donations found.</p>
        ) : (
          <table className="volunteers-table">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Message</th>
                <th>Donated On</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation, index) => (
                <tr key={donation._id}>
                  <td>{index + 1}</td>
                  <td>{donation.fullName}</td>
                  <td>{donation.email}</td>
                  <td>{donation.mobile || "N/A"}</td>
                  <td>{donation.message}</td>
                  <td>{new Date(donation.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DonationAdmin;
