import mongoose from 'mongoose';
import chalk from 'chalk';  // Import chalk

export const connectDB = async () => {    
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // additional mongoose options can go here if needed
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);  
    }
    catch (error) {
        console.error(`Error: ${error.message}`);  
        process.exit(1);
    }  
};
