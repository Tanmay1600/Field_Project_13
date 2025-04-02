import express from 'express';
import dotenv from 'dotenv';
import volunteerRoutes from "./routes/volunteerRoutes.js";
import initiativeRoutes from "./routes/initiativeRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
dotenv.config();
console.log(process.env.MONGO_URI);

const app = express();
app.use(express.json());

import { connectDB } from './config/db.js';


app.use("/api/volunteers", volunteerRoutes);
app.use("/api/initiatives", initiativeRoutes);
app.use("/api/events", eventRoutes);

app.get('/', (req, res) => {
  res.send('Hello'); 
}
);

app.listen(3000, () => {
    connectDB();
  console.log('Server is running on http://localhost:3000 ');
}   );