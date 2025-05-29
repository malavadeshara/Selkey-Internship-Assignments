import mongoose from 'mongoose';

const connectDataBase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MongoDB_URL);
    console.log(`Database Connected Successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error while connecting to database:', error.message);
    process.exit(1); // Exit the app if DB connection fails
  }
};

export default connectDataBase;