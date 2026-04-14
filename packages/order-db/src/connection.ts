import mongoose from 'mongoose';

let isConnected = false;
const connectOrderDB = async () => {
    if (isConnected) return;
    
    try {
        await mongoose.connect(process.env.MONGO_URL || '');
        isConnected = true;
        console.log('Connected to Order Database');
    } catch (error) {
        console.error('Error connecting to Order Database:', error);
        process.exit(1);
    }
}

export default connectOrderDB;