import './Avatar.scss';

export interface AvatarProps {
  src: string;
}

export const Avatar = (props: AvatarProps) => {
  return <img src={props.src} className="avatar" alt="avatar" />;
};

export default Avatar;
