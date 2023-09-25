import * as yup from 'yup';

export const getCheckoutSchema = () => {
  const schema = yup.object().shape({
    name: yup.string().required('name is required').max(50, 'max length is 50'),
    lastName: yup.string().required('last name is required').max(50, 'max length is 50'),
    company: yup.string().max(50, 'max length is 50'),
    city: yup.string().required('city is required').max(50, 'max length is 50'),
    postalCode: yup.string().required('postal code is required').min(4, 'min length is 4').max(10, 'max length is 10'),
    street: yup.string().required('street is required').max(50, 'max length is 50'),
    country: yup.string().required('country is required').max(20, 'max length is 20'),
    email: yup.string().required('email is required').email('wrong format').max(256, 'max length is 256'),
    phoneNumber: yup.string().required('phone is required').min(8, 'min length is 8'),
    description: yup.string().required('description is required').email('wrong format').max(256, 'max length is 256'),
    cardNumber: yup
      .string()
      .required('card number is required')
      .test('cardNumberLength', 'The card number must be equal to 16 characters', (str: string | undefined) => str?.replaceAll(' ', '').length === 16)
      .nullable(),
    expDate: yup
      .string()
      .required('expire date is required')
      .test('dateFormat', 'wrong date format', (str: string | undefined) => {
        if (str !== undefined) {
          if (!str.match(/^\d{2}\/\d{2}$/)) {
            return false;
          } else {
            const [month, year] = str.split('/').map((item) => parseInt(item));
            const currentYear: number = parseInt(new Date().getFullYear().toString().slice(2));
            const currentMonth: number = new Date().getMonth() + 1;

            const incorrectMonth: boolean = month < 1 || month > 12;
            const incorrectYear: boolean = year < currentYear;

            if (incorrectMonth || incorrectYear) {
              return false;
            } else {
              if (year === currentYear && month <= currentMonth) {
                return false;
              }
            }
          }
        }
        return true;
      })
      .nullable(),
    code: yup
      .string()
      .required('cvc is required')
      .test('codeLength', 'wrong length', (str: string | undefined) => str?.length === 3 || str?.length === 4)
      .nullable(),
  });

  return schema;
};
