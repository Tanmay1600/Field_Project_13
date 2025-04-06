import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String }, // optional or required based on your use case
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Donation = mongoose.model("Donation", donationSchema);

export default Donation;
