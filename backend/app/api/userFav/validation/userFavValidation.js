const { userFav } = require('./userFavSchema');

module.exports = {
  addUserFavValidation: async (req, res, next) => {
    const value = await userFav.validate(req.body);
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
