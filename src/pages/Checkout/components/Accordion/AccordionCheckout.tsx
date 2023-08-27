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
          header={
            <div className="header">
              <span>{title}</span>
              <img className="arrow" src={arrowUp} alt="" />
            </div>
          }
          buttonProps={{
            className: ({ isEnter }) => `${'item-btn'} ${isEnter && 'item-btn-expanded'}`,
          }}>
          <div className="divider"></div>
          <div className="item-panel">{content}</div>
        </Item>
      </Accordion>
    </div>
  );
};

export default AccordionCheckout;
