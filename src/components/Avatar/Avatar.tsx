import './Avatar.scss';
import { FC } from 'react';

export interface AvatarProps {
  src: string;
  className?: string;
}

export const Avatar: FC<AvatarProps> = ({ src, className }) => {
  return <img src={src} className={className ?? 'avatar'} alt="avatar" />;
};

export default Avatar;
