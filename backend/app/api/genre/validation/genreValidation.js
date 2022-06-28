const { genre } = require('./genreSchema');

module.exports = {
  addGenreValidation: async (req, res, next) => {
    const value = await genre.validate(req.body);
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
