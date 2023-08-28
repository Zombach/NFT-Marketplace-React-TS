import './CheckoutFragment.scss';
import AccordionCheckout from '../Accordion/AccordionCheckout';
import React, { type FC } from 'react';

export const CheckoutFragment: FC = () => {
  return (
    <div className="checkout-accordions-container">
      <AccordionCheckout title="Customers Information" content={'j'} />
      <AccordionCheckout title="Delivery" content={'j'} />
      <AccordionCheckout title="Payment" content={'j'} />
      <AccordionCheckout title="Additional info" content={'j'} />
      <AccordionCheckout title="Summary" content={'j'} />
    </div>
  );
};

export default CheckoutFragment;
