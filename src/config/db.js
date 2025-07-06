const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI || "mongodb://mongo:27017/jwtAuthDB";

  if (!mongoURI) {
    console.error("Error: MONGO_URI environment variable is not set.");
    process.exit(1); // Exit the process with a failure code
  }

  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
