import * as yup from 'yup';

export const ValidationLoginSchema = () => {
  const schema = yup.object().shape({
    password: yup.string().required('password is required').min(6, 'min length is 6').max(100, 'max length is 100'),
    email: yup.string().required('email is required').email('wrong email format').max(256, 'max length is 256'),
  });

  return schema;
};
