import './SellersSwitch.scss';
import { FC } from 'react';
import Switch, { SwitchItem } from '@components/Switch/Switch';

export interface SellersSwitchProps {
  firstItemAction: () => void;
  secondItemAction: () => void;
  thirdItemAction: () => void;
}

export const SellersSwitch: FC<SellersSwitchProps> = (props) => {
  const firstItem: SwitchItem = {
    onClick: props.firstItemAction,
    id: '1 day',
    item: '1 day',
  };
  const secondItem: SwitchItem = {
    onClick: props.secondItemAction,
    id: '7 days',
    item: '7 days',
  };

  const thirdItem: SwitchItem = {
    onClick: props.thirdItemAction,
    id: '30 days',
    item: '30 days',
  };

  return <Switch items={[firstItem, secondItem, thirdItem]} defaultState={1}></Switch>;
};

export default SellersSwitch;
