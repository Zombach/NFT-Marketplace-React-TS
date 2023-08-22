import './Creators.scss';
import { type CardSmall } from '@models/CardModels/CardModels';
import { cards as mock } from '@resources/moq/Creators';
import CardsRender from './CardsRender/CardsRender';
import React, { type FC, useEffect, useState } from 'react';

export const Creators: FC = () => {
  const [cards, setCards] = useState<CardSmall[]>([]);
  const SetCards = (value: CardSmall[]) => {
    setCards(() => value);
  };

  useEffect(() => {
    const getCards = async () => {
      await timeout(1000);
      SetCards(mock);
    };
    getCards();
  }, []);

  const timeout = (delay: number) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  return <div className="creators">{cards && <CardsRender cards={cards} />}</div>;
};

export default Creators;
