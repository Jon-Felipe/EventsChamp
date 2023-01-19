require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

// routers
const eventsRouter = require('./routes/events');

app.use(express.json());

// routes
app.use('/api/v1/events', eventsRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server listening on PORT: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
