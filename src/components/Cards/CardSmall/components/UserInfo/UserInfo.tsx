import './UserInfo.scss';
import { ReactComponent as Layer } from './assets/layer.svg';
import { Link } from 'react-router-dom';
import Avatar from '@components/Avatar/Avatar';
import React, { type FC } from 'react';

interface UserInfoProps {
  userId: number;
  userName: string;
  avatar: string;
  func?: (usingUserId: string, userId: string) => {};
}

export const UserInfo: FC<UserInfoProps> = ({ userId, userName, avatar, func }) => {
  return (
    <div key={userId} id={userId.toString()} className="user-info">
      <Avatar className="avatar" src={avatar} />
      <Link to={`/creators/${userId}`}>
        <p className="user-name">{userName}</p>
      </Link>
    </div>
  );
};

export default UserInfo;
