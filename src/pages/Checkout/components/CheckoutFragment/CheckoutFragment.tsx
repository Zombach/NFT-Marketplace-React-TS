import './CheckoutFragment.scss';
import AccordionCheckout from '../Accordion/AccordionCheckout';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import React, { type FC } from 'react';

export const CheckoutFragment: FC = () => {
  return (
    <div className="checkout-accordions-container">
      <AccordionCheckout title="Customers Information" content={<CustomerInfo />} />
      <AccordionCheckout title="Delivery" content={'j'} />
      <AccordionCheckout title="Payment" content={'j'} />
      <AccordionCheckout title="Additional info" content={'j'} />
      <AccordionCheckout title="Summary" content={'j'} />
    </div>
  );
};

export default CheckoutFragment;
