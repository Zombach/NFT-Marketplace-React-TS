import './NotFound.scss';
import { useNavigate } from 'react-router-dom';
import ButtonBox from '@components/ButtonBox/ButtonBox';
import React, { type FC } from 'react';

export const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404 ERROR</h1>
      <p>
        This page not found;<br></br>back to home and start again
      </p>
      <ButtonBox
        onClick={() => {
          navigate('/');
        }}
        buttonClassName="homepage-btn buy-button primary-btn"
        text={`HOMEPAGE`}></ButtonBox>
    </div>
  );
};

export default NotFound;
