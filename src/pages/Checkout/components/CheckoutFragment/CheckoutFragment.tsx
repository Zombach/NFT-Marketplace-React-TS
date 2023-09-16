import './CheckoutFragment.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AccordionCheckout from '../Accordion/AccordionCheckout';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import ContactInfo from '../ContactInfo/ContactInfo';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Payment from '../Payment/Payment';
import React, { type FC } from 'react';
import Summary from '../Summary/Summary';

export const CheckoutFragment: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('data', data);
  };

  return (
    <form id="form-checkout" onSubmit={handleSubmit(onSubmit)}>
      <div className="checkout-accordions-container">
        <AccordionCheckout title="Customers Information" content={<CustomerInfo />} />
        <AccordionCheckout title="Contact information" content={<ContactInfo />} />
        <AccordionCheckout title="Payment" content={<Payment />} />
        <AccordionCheckout title="Additional info" content={<AdditionalInfo />} />
        <AccordionCheckout title="Summary" content={<Summary />} />
      </div>
    </form>
  );
};
