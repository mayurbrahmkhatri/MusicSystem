const { songs } = require('./songSchema');

module.exports = {
  addSongsValidation: async (req, res, next) => {
    console.log("Schema ", req.body);
    const value = await songs.validate(req.body);
    console.log("Value", value);
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
