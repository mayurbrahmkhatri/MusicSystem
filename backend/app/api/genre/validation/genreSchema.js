const joi = require('@hapi/joi');

const schema = {
  genre: joi.object({
    genreName: joi.string().max(15).required(),
  }),
};

module.exports = schema;
