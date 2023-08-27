import './CheckoutFragment.scss';
import AccordionCheckout from '../Accordion/AccordionCheckout';
import React, { type FC } from 'react';

export const CheckoutFragment: FC = () => {
  return (
    <div className="checkout-accordions-container">
      <AccordionCheckout title="Customers Information" content={'jopa'} />
      <AccordionCheckout title="Delivery" content={'jopa'} />
      <AccordionCheckout title="Payment" content={'jopa'} />
      <AccordionCheckout title="Additional info" content={'jopa'} />
      <AccordionCheckout title="Summary" content={'jopa'} />
    </div>
  );
};

export default CheckoutFragment;
