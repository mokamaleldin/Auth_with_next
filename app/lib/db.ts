import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async (): Promise<void> => {
    if (mongoose.connections[0].readyState) {
        return console.log('Already connected to MongoDB');
    }

    await mongoose.connect(process.env.MONGODB_URI as string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions);
};

export default connectDB;