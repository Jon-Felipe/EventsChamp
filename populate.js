require('dotenv').config();
const connectDB = require('./db/connect');
const Event = require('./models/Events');
const mockData = require('./mock-data.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Event.create(mockData);
    console.log('Success!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();