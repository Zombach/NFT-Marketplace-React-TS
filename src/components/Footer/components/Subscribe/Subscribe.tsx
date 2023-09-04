import './Subscribe.scss';
import { type FC } from 'react';
import { ReactComponent as SendIcon } from './assets/send.svg';
import ButtonBox from '@components/ButtonBox/ButtonBox';
import InputText from '@components/Inputs/InputText/InputText';

export const Subscribe: FC = () => {
  return (
    <div className="subscribe">
      <div className="label">
        <span>Subscribe and get news</span>
      </div>
      <form className="block">
        <InputText id={'subs'} name={'subs'} placeholder={'Email'} rightSideItem={<ButtonBox SvgBox={<SendIcon></SendIcon>}></ButtonBox>}></InputText>
      </form>
    </div>
  );
};

export default Subscribe;
