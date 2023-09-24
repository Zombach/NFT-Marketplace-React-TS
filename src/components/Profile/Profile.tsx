import './Profile.scss';
import { Creator } from '@models/Creator';
import { type FC } from 'react';
import { ReactComponent as ShareIcon } from './assets/share.svg';
import AuthoredBy from '@components/AuthoredBy/AuthoredBy';
import Avatar from '@components/Avatar/Avatar';
import Button from '@components/ButtonBox/ButtonBox';

export interface ProfileProps {
  headerImg: string;
  headerName: string;
  avatar: string;
  username?: string;
  desc: string;
  buttonLeftText: string;
  buttonRightText: string;
  children: React.ReactNode;
  buttonsClassName?: string;
}

export const Profile: FC<ProfileProps> = (props) => {
  return (
    <div className="details-page">
      <div className="header-img">
        <img src={props.headerImg} alt=""></img>
      </div>
      <section className="profile-section">
        <div className="profile-section-left-part">
          <Avatar src={props.avatar}></Avatar>
          <h2>{props.headerName}</h2>
          {props.username && <AuthoredBy username={props.username}></AuthoredBy>}
          <span className="desc">{props.desc}</span>
          <div className={props.buttonsClassName ?? 'profile-buttons'}>
            <Button className="left-btn" buttonClassName="left-btn primary-btn" text={props.buttonLeftText}></Button>
            <div className="profile-buttons-right">
              <Button className="right-btn" buttonClassName="right-btn primary-2-btn" text={props.buttonRightText}></Button>
              <Button buttonClassName="share-button" SvgBox={<ShareIcon></ShareIcon>}></Button>
            </div>
          </div>
        </div>
        <div className="profile-section-right-part thin-block-border">{props.children}</div>
      </section>
    </div>
  );
};

export default Profile;
