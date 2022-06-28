const { playlistDetails } = require('./playlistDetailsSchema');

module.exports = {
  addPlaylistDetailsValidation: async (req, res, next) => {
    const value = await playlistDetails.validate(req.body);
    if (value.error) {
      res.json({
        success: 0,
        message: value.error.details[0].message,
        status_code: 400,
      });
    } else {
      next();
    }
  },
};
