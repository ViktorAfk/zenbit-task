import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .matches(passwordRules, {
        message:
          'Please create a stronger password: min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit',
      })
      .required('Required'),
  })
  .required();
