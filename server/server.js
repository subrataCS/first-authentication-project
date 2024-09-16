import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

console.log('Environment Variables:', process.env);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user', userRoutes);

app.get('/hello', (req, res) => {
    console.log('JWT_SECRET:', process.env.JWT_SECRET);
})


// MongoDB connection
// server.js or index.js
async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database Connected!');
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1);
    }
}


main();


// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
