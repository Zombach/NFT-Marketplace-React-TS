import './Home.scss';
import { RadioButton } from '@components/RadioButton/RadioButton';
import { UserContext } from '@components/Contexts/UserContext';
import React, { type FC, useContext } from 'react';

export const Home: FC = () => {
  const context = useContext(UserContext);
  return (
    <div className="choose-pay">
      <RadioButton textLeft="PayPal" textRight="+ $14.00" />
      <RadioButton textLeft="ApplePal" textRight="+ $19.00" />
      <RadioButton textLeft="GooglePal" />
    </div>
  );
};

export default Home;
