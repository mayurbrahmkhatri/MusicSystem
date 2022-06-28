const joi = require('@hapi/joi');

const schema = {
  userPlaylistsSchema: joi.object({
    userName: joi.string().required(),
    playlistName: joi.string().required(),
  }),
};

module.exports = schema;
