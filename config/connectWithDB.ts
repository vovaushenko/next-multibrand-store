import mongoose from 'mongoose';

/**
 * Function to instantiate connection with MongoDB
 *@function
 *@instantiates connection with MongoDB
 */
const connectWithDB = (): void => {
  // If mongoose connect is not ready
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  // If ready -> connect to DB
  mongoose
    .connect(process.env.DB_URI ?? '', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    })
    .then(() => console.log('Connected to DB'));
};
export default connectWithDB;
