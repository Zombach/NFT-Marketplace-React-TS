import './AccordionCheckout.scss';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import React, { type FC } from 'react';
import arrowUp from './assets/arrowUp.svg';

export interface AccordionCheckoutProps {
  title: string;
  content: any;
}

export const AccordionCheckout: FC<AccordionCheckoutProps> = ({ title, content }) => {
  return (
    <div>
      <Accordion className="accordion">
        <Item
          className="item"
          header={
            <div className="header">
              <span>{title}</span>
              <img src={arrowUp} alt="Chevron Down" />
            </div>
          }
          buttonProps={{
            className: 'item-btn',
          }}>
          {content}
        </Item>
      </Accordion>
    </div>
  );
};

export default AccordionCheckout;
