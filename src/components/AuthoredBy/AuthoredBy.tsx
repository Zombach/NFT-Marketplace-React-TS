import './AuthoredBy.scss';
import { FC } from 'react';
import Avatar from '@components/Avatar/Avatar';

export interface AuthoredByProps {
  srcAvatar?: string;
  username: string;
}

export const AuthoredBy: FC<AuthoredByProps> = ({ srcAvatar, username }) => {
  return (
    <div className="authored-by">
      {srcAvatar ? <Avatar src={srcAvatar}></Avatar> : null}
      <div>
        <span className="created-by">created by: </span>
        <span>{username}</span>
      </div>
    </div>
  );
};

export default AuthoredBy;
