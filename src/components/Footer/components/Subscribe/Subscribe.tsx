import './Subscribe.scss';
import { type FC } from 'react';
import { ReactComponent as SendIcon } from './assets/send.svg';
import { useForm } from 'react-hook-form';
import ButtonBox from '@components/ButtonBox/ButtonBox';
import InputText from '@components/Inputs/InputText/InputText';

export interface SubscribeModel {
  subs: string;
}

export const Subscribe: FC = () => {
  const { register } = useForm<SubscribeModel>();

  return (
    <div className="subscribe">
      <div className="label">
        <span>Subscribe and get news</span>
      </div>
      <form className="block">
        <InputText
          id={'subs'}
          name={'subs'}
          placeholder={'Email'}
          register={register}
          regName="description"
          rightSideItem={<SendIcon></SendIcon>}></InputText>
      </form>
    </div>
  );
};

export default Subscribe;
