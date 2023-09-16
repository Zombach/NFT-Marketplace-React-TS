import './CheckoutFragment.scss';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { getCheckoutSchema } from './ValidationCheckout';
import { yupResolver } from '@hookform/resolvers/yup';
import AccordionCheckout from '../Accordion/AccordionCheckout';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import ContactInfo from '../ContactInfo/ContactInfo';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Payment from '../Payment/Payment';
import React, { type FC } from 'react';
import Summary from '../Summary/Summary';

type Order = {
  name: string;
  lastName: string;
  company: string | undefined;
  city: string;
  postalCode: string;
  street: string;
  country: string;
  email: string;
  phoneNumber: string;
  description: string;
  cardNumber: string | null;
  expDate: string | null;
  code: string | null;
};

export const CheckoutFragment: FC = () => {
  const methods = useForm<any>({ resolver: yupResolver(getCheckoutSchema()) });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Order> = (data) => {
    console.log('data', data);
  };

  return (
    <FormProvider {...methods}>
      <form id="form-checkout" onSubmit={handleSubmit(onSubmit)}>
        <div className="checkout-accordions-container">
          <AccordionCheckout title="Customers Information" content={<CustomerInfo />} />
          <AccordionCheckout title="Contact information" content={<ContactInfo />} />
          <AccordionCheckout title="Payment" content={<Payment />} />
          <AccordionCheckout title="Additional info" content={<AdditionalInfo />} />
          <AccordionCheckout title="Summary" content={<Summary />} />
        </div>
      </form>
    </FormProvider>
  );
};
