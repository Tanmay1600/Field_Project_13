import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/volunteer_admin.css"; // Reusing the same CSS

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/contacts");
        setContacts(res.data);
      } catch (err) {
        console.error("Error fetching contacts:", err);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar">
        <h2>NGO Admin</h2>
        <nav>
          <a href="/admin/volunteers">Volunteers</a>
          <a href="/admin/donations">Donations</a>
          <a href="/admin/events">Events</a>
          <a href="/admin/contacts" className="active">Contact</a>
        </nav>
      </div>

      <div className="volunteers-container">
        <h2>Contact Messages</h2>
        {contacts.length === 0 ? (
          <p>No contact messages available.</p>
        ) : (
          <table className="volunteers-table">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Message</th>
                <th>Submitted On</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={contact._id}>
                  <td>{index + 1}</td>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.email}</td>
                  <td>{contact.mobile || "N/A"}</td>
                  <td>{contact.message}</td>
                  <td>{new Date(contact.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
