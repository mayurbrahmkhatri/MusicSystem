const joi = require('@hapi/joi');

const schema = {
  albumDetails: joi.object({
    album_id: joi.number().min(1).required(),
    song_id: joi.number().min(1).required(),
  }),
};

module.exports = schema;
