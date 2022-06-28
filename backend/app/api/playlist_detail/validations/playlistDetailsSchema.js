const joi = require('@hapi/joi');

const schema = {
  playlistDetails: joi.object({
    playlist_id: joi.number().required(),
    song_id: joi.number().required(),
  }),
};

module.exports = schema;
