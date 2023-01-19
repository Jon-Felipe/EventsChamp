const mongoose = require('mongoose');

const EventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      maxLength: 20,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
      minLength: 20,
    },
    price: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['showing', 'upcoming', 'expired'],
      default: 'upcoming',
    },
    eventLocation: {
      type: String,
      default: 'my location',
      required: true,
      maxLength: 20,
      trim: true,
    },
    eventVenue: {
      type: String,
      default: 'my venue',
      required: true,
      maxLength: 50,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', EventSchema);
