const joi = require('@hapi/joi');

const schema = {
  songs: joi.object({
    song_name: joi.string().max(30).required(),
    movie_name: joi.string().max(30).required(),
    artist_name: joi.string().max(30).required(),
    path: joi.string().max(150).required(),
    video_path : joi.string().max(50).required(),
  }),
};

module.exports = schema;
