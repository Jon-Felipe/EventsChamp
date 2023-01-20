require('dotenv').config();
require('express-async-errors');

const path = require('path');
const express = require('express');
const app = express();

// connect DB
const connectDB = require('./db/connect');

// routers
const eventsRouter = require('./routes/events');

app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(express.json());

// routes
app.use('/api/v1/events', eventsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server listening on PORT: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
