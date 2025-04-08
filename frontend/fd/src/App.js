import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import AboutUs from './pages/about_us';
import WhatWeDo from './pages/what_we_do';
import Contact from './pages/contact';
import Donate from './pages/donate';
import FoodDonation from './pages/foodDonation';
import DonationAdmin from './pages/donation_admin';
import VolunteerAdmin from './pages/volunteer_admin'; // Import the new VolunteerAdmin component
import EventAdmin from './pages/event_admin';
import ContactPage from './pages/contactPage';


function App() {
  return (
    <Router> {/* Use 'Router' instead of 'BrowserRouter' */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/food-donation" element={<FoodDonation />} />
        <Route path="admin/volunteers" element={<VolunteerAdmin />} /> {/* Add the new route for VolunteerAdmin */}
        <Route path="admin/events" element={<EventAdmin/>} />
        <Route path="admin/contacts" element={<ContactPage/>} />
        <Route path="admin/donations" element={<DonationAdmin/>} />
      </Routes>
    </Router>
  );
}

export default App;
