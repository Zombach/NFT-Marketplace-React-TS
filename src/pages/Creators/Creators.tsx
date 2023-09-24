import './Creators.scss';
import { type CardSmall } from '@models/CardModels/CardModels';
import { cards as mock } from '@resources/moq/Creators';
import Cards from './CardsRender/Cards';
import React, { type FC, useEffect, useState } from 'react';

export const Creators: FC = () => {
  const [cards, setCards] = useState<CardSmall[]>([]);

  useEffect(() => {
    const getCards = async () => {
      await timeout(1000);
      setCards(mock);
    };
    getCards();
  }, []);

  const timeout = (delay: number) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  return <div className="creators">{cards && <Cards cards={cards} />}</div>;
};

export default Creators;
