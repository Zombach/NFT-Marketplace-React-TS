import './CardSmall.scss';
import { type FC } from 'react';
import { ReactComponent as Icon } from '../../../pages/Creators/CardsRender/HeaderCardSmall/assets/info.svg';
import { UserInfo } from '@models/User';
import { UserInfo as UserInfoComponent } from './components/UserInfo/UserInfo';
import { checkOnMobileOnly } from '@src/helpers';

interface CardSmallProps {
  number: number;
  model: UserInfo;
}

export const CardSmall: FC<CardSmallProps> = ({ number, model }) => {
  const { id, name, avatar } = model;
  return (
    <div className="card-small">
      <div className="user-info-block">
        <span className="number">{number + 1}</span>
        <div className="user-info-block-right">
          <UserInfoComponent userId={id} userName={name} avatar={avatar}></UserInfoComponent>
          {/* <button className="follow">
            <span className="follow-text">{'Follow'}</span>
          </button> */}
        </div>
      </div>
      <div className="user-extra-info-box">
        <div className="user-extra-info">
          {checkOnMobileOnly() && (
            <>
              <div className="header-item">
                <span className="text volume">Volume (USD)</span>
                <Icon className="icon" />
              </div>
              <div className="header-item">
                <span className="text sales">Sales</span>
                <Icon className="icon" />
              </div>

              <div className="header-item">
                <span className="text items">Items</span>
                <Icon className="icon" />
              </div>
              <div className="header-item">
                <span className="text followers">Followers</span>
                <Icon className="icon" />
              </div>
            </>
          )}
          <span className="">{123}</span>
          <span className="">{333}</span>
          <span className="">{25}</span>
          <span className="">{29}</span>
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
