import './HeaderCard.scss';
import { ReactComponent as ArrowLeft } from '../assets/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../assets/arrowRight.svg';
import { FC, createContext, useEffect, useState } from 'react';
import { HeaderFoto } from '@models/HeaderFoto';
import { fotoHeaderMock } from '@resources/moq/Creators';
import Dots from '@components/Dots/Dots';

export interface HeaderCardProps {
  id: number;
  avatar: string;
  username: string;
  whatCreated: string;
  whenCreated: string;
}

export interface FindModel<T> {
  items: T[];
}

export const SliderContext = createContext(0);

export const HeaderCard: FC<HeaderCardProps> = ({ id, avatar, username, whatCreated, whenCreated }) => {
  const [skip, setSkip] = useState<number>(0);
  const [headerCards, setHeaderCards] = useState<HeaderFoto[]>([]);

  const onClickSkipLeft = () => {
    if (skip + 1 >= 4) {
      setSkip(0);
    } else {
      setSkip(skip + 1);
    }
  };

  const onClickSkipRight = () => {
    if (skip - 1 < 0) {
      setSkip(3);
    } else {
      setSkip(skip - 1);
    }
  };

  const getSellers = (skip: number): FindModel<HeaderFoto> => {
    const response: FindModel<HeaderFoto> = { items: fotoHeaderMock.slice(skip, skip + 1) };
    return response;
  };

  useEffect(() => {
    const currentSellers = getSellers(skip);
    setHeaderCards(currentSellers.items);
  }, [4, skip]);

  // eslint-disable-next-line no-lone-blocks
  {
    return (
      <div id="header-card">
        <div className="header-card-left">
          {headerCards.map((headerCard) => {
            return (
              <>
                <div className="header-card-index">
                  <img className="main-foto" src={headerCard.mainFoto} alt="" />
                </div>
                <div className="text-block">
                  <div>
                    <img className="ava-left" src={headerCard.avatar} alt="" />
                  </div>
                  <div className="ava-right">
                    <p>
                      {headerCard.username} <span className="little-text">{headerCard.whatCreated}</span>
                    </p>
                    <p className="little-text opacity">{headerCard.whenCreated}</p>
                  </div>
                </div>
                <div>
                  <SliderContext.Provider value={headerCard.id}>
                    <Dots />
                  </SliderContext.Provider>
                </div>
                <div className="arrow-switch">
                  <button onClick={onClickSkipRight} className="circle-big">
                    <div className="arrow">
                      <ArrowRight></ArrowRight>
                    </div>
                  </button>
                  <button onClick={onClickSkipLeft} className="circle-big">
                    <div className="arrow ">
                      <ArrowLeft></ArrowLeft>
                    </div>
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }
};
