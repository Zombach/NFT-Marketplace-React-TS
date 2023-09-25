import { SwitchItem } from '@components/Switch/Switch';

export const initSwitchItems = (/*dispatch: Dispatch*/) => {
  const switchItems: SwitchItem[] = [
    {
      onClick: () => {},
      item: '1 Day',
    },
    {
      onClick: () => {},
      item: '7 Days',
    },
    {
      onClick: () => {},
      item: '30 Days',
    },
  ];

  return switchItems;
};
