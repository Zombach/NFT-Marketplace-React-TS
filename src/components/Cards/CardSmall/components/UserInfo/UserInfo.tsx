import './UserInfo.scss';
import { ReactComponent as Layer } from './assets/layer.svg';
import { Link } from 'react-router-dom';
import Avatar from '@components/Avatar/Avatar';
import React, { type FC } from 'react';

interface UserInfoProps {
  userId: string;
  userName: string;
  avatar: string;
  func?: (usingUserId: string, userId: string) => {};
}

export const UserInfo: FC<UserInfoProps> = ({ userId, userName, avatar, func }) => {
  return (
    <div key={userId} id={userId} className="user-info">
      {/*<Avatar className="avatar" src={avatar} /> || <img className="avatar" src={avatar} alt="avatar"></img>*/}
      <Layer className="avatar" />
      <button
        className="button"
        onClick={() => {
          const click =
            func ??
            (() => {
              // eslint-disable-next-line
              console.log('Не реализованная функция');
            });
          click('id нажавшего пользователя', userId);
        }}>
        <Link to={`/creators/${userId}`}>
          <p className="user-name">{userName}</p>
        </Link>
      </button>
    </div>
  );
};

export default UserInfo;
