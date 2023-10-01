import * as yup from 'yup';

export const CreateNFTValidationSchema = () => {
  const schema = yup.object().shape({
    name: yup.string().required('name is required').min(3, 'min length is 3').max(128, 'max length is 128'),
    description: yup.string().max(256, 'max length is 256'),
    price: yup.number().positive('only positive'),
  });

  return schema;
};
