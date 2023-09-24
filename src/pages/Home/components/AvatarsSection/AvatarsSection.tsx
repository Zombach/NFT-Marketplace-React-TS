import './AvatarsSection.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { avatarsMock } from '@src/resources/moq/Creators';
import Avatar from '@components/Avatar/Avatar';
import ButtonBox from '@components/ButtonBox/ButtonBox';

export const AvatarsSection: FC = () => {
  return (
    <div className="avatars-section">
      <div className="avatars-header">
        <h2>BnB is for everyone</h2>
        <span className="text">Join the millions of creators, collectors, and curators who are on this journey with you.</span>
      </div>
      <div className="avatars-container">
        {avatarsMock.map((a, i) => (
          <Avatar key={i} src={a}></Avatar>
        ))}
      </div>
      <Link to={'../signUp'}>
        <ButtonBox buttonClassName="get-started">Get Started</ButtonBox>
      </Link>
    </div>
  );
};

export default AvatarsSection;
