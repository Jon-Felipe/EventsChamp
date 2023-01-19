// @desc    Fetch all events
// @route   GET /api/v1/events
// @access  Public
const getAllEvents = async (req, res) => {
  res.send('get all events');
};

module.exports = {
  getAllEvents,
};
