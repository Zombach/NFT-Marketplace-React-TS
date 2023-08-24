import './UserInfo.scss';
import { ReactComponent as Layer } from './assets/layer.svg';
import Avatar from '@components/Avatar/Avatar';
import Button from '@components/ButtonBox/ButtonBox';
import React, { type FC } from 'react';
import Svg from '@components/ButtonBox/components/SvgBox/SvgBox';

interface UserInfoProps {
  userId: string;
  userName: string;
  avatar: string;
}

export const UserInfo: FC<UserInfoProps> = ({ userId, userName, avatar }) => {
  return (
    <div key={userId} id={userId} className="user-info">
      {/*<Avatar className="avatar" src={avatar} />*/}
      <Svg svgClassName="avatar" SvgElement={Layer} />
      <Button
        textClassName="user-name"
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log('id нажавшего пользователя', userId);
        }}>
        {userName}
      </Button>
    </div>
  );
};

export default UserInfo;
