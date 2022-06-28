const joi = require('@hapi/joi');

const schema = {
  album: joi.object({
    album_name: joi.string().max(100).required(),
  }),
};

module.exports = schema;
