const { StatusCodes } = require('http-status-codes');

const Event = require('../models/Events');

// @desc    Fetch all events
// @route   GET /api/v1/events
// @access  Public
const getAllEvents = async (req, res) => {
  res.send('get all events');
};

// @desc    Fetch single event
// @route   GET /api/v1/events/:id
// @access  Public
const getEvent = async (req, res) => {
  res.send('get event');
};

// @desc    Create event
// @route   POST /api/v1/events
// @access  Private
const createEvent = async (req, res) => {
  const event = await Event.create(req.body);

  res.status(StatusCodes.CREATED).json({ event });
};

// @desc    Update Event
// @route   PATCH /api/v1/events/:id
// @access  Private
const updateEvent = async (req, res) => {
  res.send('update event');
};

// @desc    Delete Event
// @route   DELETE /api/v1/events/:id
// @access  Private
const deleteEvent = async (req, res) => {
  res.send('delete event');
};

module.exports = {
  getAllEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
