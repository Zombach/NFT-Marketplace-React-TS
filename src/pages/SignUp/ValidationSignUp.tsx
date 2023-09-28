import * as yup from 'yup';

export const ValidationSignUp = () => {
  const schema = yup

    .object({
      email: yup.string(),

      password: yup.string(),
    })

    .shape({
      email: yup.string().required('email is required').max(256, 'max length is 256'),

      password: yup.string().required('password is required').min(6, 'min length is 6'),
    });

  return schema;
};

