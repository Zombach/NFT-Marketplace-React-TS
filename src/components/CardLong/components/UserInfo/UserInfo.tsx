import './UserInfo.scss';
import React, { type FC } from 'react';

interface UserInfoProps {
  userName: string;
  avatar: string;
}

export const UserInfo: FC<UserInfoProps> = ({ userName, avatar }) => {
  return (
    <div className="user-info">
      <img src={avatar} alt="avatar"></img>
      <button className="button">
        <p className="user-name">{userName}</p>
      </button>
    </div>
  );
};

export default UserInfo;
