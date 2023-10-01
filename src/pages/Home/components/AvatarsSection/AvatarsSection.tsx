import './AvatarsSection.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { avatarsMock } from '@src/resources/moq/Creators';
import { useGetUsersQuery } from '@src/features/api/usersApi';
import Avatar from '@components/Avatar/Avatar';
import ButtonBox from '@components/ButtonBox/ButtonBox';

export const AvatarsSection: FC = () => {
  const { data: users } = useGetUsersQuery();
  return (
    <div className="avatars-section">
      <div className="avatars-header">
        <h2>BnB is for everyone</h2>
        <span className="text">Join the millions of creators, collectors, and curators who are on this journey with you.</span>
      </div>
      <div className="avatars-container">{users && users.map((user, i) => <Avatar key={i} src={user.avatar}></Avatar>)}</div>
      <Link to={'./sign-up'}>
        <ButtonBox buttonClassName="get-started" text="Get Started"></ButtonBox>
      </Link>
    </div>
  );
};

export default AvatarsSection;
