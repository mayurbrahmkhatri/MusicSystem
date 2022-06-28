const { messages } = require('../../../commons/util');

const validations = {
  songNameValidation: {
    in: ['body'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: messages('songNameEmptyMessage'),
    },
  },
  movieNameValidation: {
    in: ['body'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: messages('movieNameEmptyMessage'),
    },
  },
  artistNameValidation: {
    in: ['body'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: messages('artistNameEmptyMessage'),
    },
  },
  pathValidation: {
    in: ['body'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: messages('pathEmptyMessage'),
    },
  },

};

const saveSongsValidationSchema = {
  song_name: validations.songNameValidation,
  movie_name: validations.movieNameValidation,
  artist_name: validations.artistNameValidation,
  path: validations.pathValidation,

};

module.exports = {
  saveSongsValidationSchema,
};

