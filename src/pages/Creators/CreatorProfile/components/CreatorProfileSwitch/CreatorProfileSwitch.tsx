import './CreatorProfileSwitch.scss';
import { FC } from 'react';
import Switch, { SwitchItem } from '@components/Switch/Switch';

export interface SellersSwitchProps {
  firstItemAction: () => void;
  secondItemAction: () => void;
  thirdItemAction: () => void;
  switchFirstItemAction: () => void;
}

export const CreatorProfileSwitch: FC<SellersSwitchProps> = (props) => {
  const firstItem: SwitchItem = {
    onClick: props.firstItemAction,
    id: 'Created',
    item: 'Created',
  };
  const secondItem: SwitchItem = {
    onClick: props.secondItemAction,
    id: 'Owned',
    item: 'Owned',
  };

  const thirdItem: SwitchItem = {
    onClick: props.thirdItemAction,
    id: 'Collections',
    item: 'Collections',
  };

  const fourthItem: SwitchItem = {
    onClick: props.thirdItemAction,
    id: 'Splits',
    item: 'Splits',
  };

  return <Switch items={[firstItem, secondItem, thirdItem, fourthItem]} defaultState={1}></Switch>;
};

export default CreatorProfileSwitch;
