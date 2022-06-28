const joi = require('@hapi/joi');

const schema = {
  songSchema: joi.object({
    id: joi.number().required(),
    songId: joi.number().required(),
  }),
};

module.exports = schema;
