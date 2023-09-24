import './HeaderCard.scss';
import { ReactComponent as ArrowLeft } from '../assets/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../assets/arrowRight.svg';
import { FC, createContext, useEffect, useState } from 'react';
import { HeaderPhoto } from '@models/HeaderPhoto';
import { photoHeaderMock } from '@resources/moq/Creators';
import Dots from '@components/Dots/Dots';

export const SliderContext = createContext(0);

export const HeaderCard: FC = () => {
  const [skip, setSkip] = useState<number>(0);
  const [headerCards, setHeaderCards] = useState<HeaderPhoto[]>([]);

  const onClickSkipLeft = () => {
    if (skip + 1 >= photoHeaderMock.length) {
      setSkip(0);
    } else {
      setSkip(skip + 1);
    }
  };

  const onClickSkipRight = () => {
    if (skip - 1 < 0) {
      setSkip(photoHeaderMock.length - 1);
    } else {
      setSkip(skip - 1);
    }
  };

  const getSellers = (skip: number): HeaderPhoto[] => {
    return photoHeaderMock.slice(skip, skip + 1);
  };

  useEffect(() => {
    const currentSellers = getSellers(skip);
    setHeaderCards(currentSellers);
  }, [skip]);

  return (
    <div id="header-card">
      <div className="header-card-left">
        {headerCards.map((headerCard, key) => {
          return (
            <div key={key}>
              <div className="header-card-index">
                <img className="main-photo" src={headerCard.mainPhoto} alt="" />
              </div>
              <div className="text-block">
                <div>
                  <img className="ava-left" src={headerCard.avatar} alt="" />
                </div>
                <div className="ava-right">
                  <p>
                    {headerCard.username} <span className="little-text">{headerCard.name}</span>
                  </p>
                  <p className="little-text opacity">{headerCard.createdAt}</p>
                </div>
              </div>
              <div>
                <SliderContext.Provider value={headerCard.id}>
                  <Dots />
                </SliderContext.Provider>
              </div>
              <div className="arrow-switch">
                <button onClick={onClickSkipRight} className="circle-big">
                  <ArrowRight className="arrow"></ArrowRight>
                </button>
                <button onClick={onClickSkipLeft} className="circle-big">
                  <ArrowLeft className="arrow"></ArrowLeft>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
