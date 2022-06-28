const validations = {
  userNameValidation: {
    in: ['body'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: 'user name field cannot be empty',
    },
  },
  firstNameValidation: {
    in: ['body'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: 'fisrt Name field cannot be empty',
    },
  },
  lastNameValidation: {
    in: ['body'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: 'last Name field cannot be empty',
    },
  },
  emailVaildation: {
    in: ['body'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: 'email field cannot be empty',
    },
  },
  passwordValidation: {
    in: ['body'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: 'password field cannot be empty',
    },
  },
  contactNumValidation: {
    in: ['body'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: 'contact number field cannot be empty',
    },
  },
};

const createUserValidationSchema = {
  user_name: validations.userNameValidation,
  first_name: validations.firstNameValidation,
  last_name: validations.lastNameValidation,
  email: validations.lastNameValidation,
  password: validations.passwordValidation,
  contact_num: validations.contactNumValidation,
};


module.exports = {
  createUserValidationSchema,
};
