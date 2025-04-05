import mongoose from 'mongoose';

const initiativeSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  date: { type: Date, required: true },
  msg: { type: String, required: true },
  image: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now }
});

const Initiative = mongoose.model('Initiative', initiativeSchema);

export default Initiative;
