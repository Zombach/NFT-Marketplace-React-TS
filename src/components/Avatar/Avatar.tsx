import './Avatar.scss';
import { FC } from 'react';

export interface AvatarProps {
  src: string;
}

export const Avatar: FC<AvatarProps> = ({ src }) => {
  return <img src={src} className="avatar" alt="avatar" />;
};

export default Avatar;
