const { album } = require('./albumSchema');

module.exports = {
  addAlbumNameValidation: async (req, res, next) => {
    const value = await album.validate(req.body);
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
