import './CheckoutFragment.scss';
import AccordionCheckout from '../Accordion/AccordionCheckout';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import ContactInfo from '../ContactInfo/ContactInfo';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Payment from '../Payment/Payment';
import React, { type FC } from 'react';
import Summary from '../Summary/Summary';

export const CheckoutFragment: FC = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form id="form-checkout" onSubmit={onSubmit}>
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

export default CheckoutFragment;
