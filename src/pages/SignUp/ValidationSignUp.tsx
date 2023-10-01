import * as yup from 'yup';

export const ValidationSignUp = () => {
  const schema = yup.object().shape({
    name: yup.string().required('name is required').min(2, 'min length is 2').max(124, 'max length is 124'),
    password: yup.string().required('password is required').min(6, 'min length is 6').max(100, 'max length is 100'),
    email: yup.string().required('email is required').email('wrong email format').max(256, 'max length is 256'),
    address: yup.string().required('address is required').max(256, 'max length is 256').min(3, 'min length is 3'),
  });

  return schema;
};
